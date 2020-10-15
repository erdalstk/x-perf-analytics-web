// Post
const post = async (body) => {
  console.log("DATA SEND", body);
  let bodyParam = null;
  const headers = {};

  if (body) {
    bodyParam = JSON.stringify(body);
  }

  return await fetch("https://x-perf-analytics-api.herokuapp.com/loadtimes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
  }).then(async (r) => await returnResponse(r));
};

const returnResponse = async (r) => {
  let json;
  try {
    json = await r.json();
  } catch (e) {
    json = null;
  }

  if (r.status === 429 || r.status === 500) {
    json = { message: `Error ${r.status}` };
  }

  return {
    status: r.status,
    response: json,
  };
};

(function () {
  const perfData = {};
  if ("PerformanceObserver" in window) {
    detectSupport(["navigation", "paint", "mark", "measure"]);

    // Time To First Byte
    let navigation_observer = new PerformanceObserver(function (list, obj) {
      const ttfb_metrics = list.getEntriesByType("navigation")[0];

      const ttfb = ttfb_metrics?.responseStart - ttfb_metrics?.startTime;
      const domLoad = ttfb_metrics?.domContentLoadedEventEnd - ttfb_metrics?.startTime;
      const windowLoad = ttfb_metrics?.domComplete;

      !!ttfb ? perfData.ttfb = ttfb : null;
      !!domLoad ? perfData.dom = domLoad : null;
      !!windowLoad ? perfData.window = windowLoad : null;
    });
    navigation_observer.observe({
      entryTypes: ["navigation", "mark", "measure"],
    });

    // First Contentful Paint
    let paint_observer = new PerformanceObserver(function (list, obj) {
      const fcp = list.getEntriesByName("first-contentful-paint")[0]?.startTime;

      !!fcp ? perfData.fcp = fcp : null;
    });
    paint_observer.observe({ entryTypes: ["paint", "mark", "measure"] });

    let postTimeout;
    postTimeout = setTimeout(function () {
      post(perfData);
      clearTimeout(postTimeout);
    }, 1000);
  }
})();

// Know when the entry types we would like to use are not supported.
// Taken From https://www.w3.org/
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      // Indicate to client-side analytics that |entryType| is not supported.
      console.log(`Client side analytics For ${entryType} is not supported`);
    }
  }
}
