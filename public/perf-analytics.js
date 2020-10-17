// Post
const post = async (body) => {
  let bodyParam = null;
  const headers = {};

  if (body) {
    bodyParam = JSON.stringify(body);
  }

  return await fetch("https://x-perf-analytics-api.herokuapp.com/time", {
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
    
    let navigation_observer = new PerformanceObserver(function (list, obj) {
      const navigation_metrics = list.getEntriesByType("navigation")[0];
      const paint_metrics = list.getEntriesByType("paint")[1];

      const fcp = paint_metrics?.startTime;
      const ttfb = navigation_metrics?.responseStart - navigation_metrics?.startTime;
      const domLoad = navigation_metrics?.domContentLoadedEventEnd - navigation_metrics?.startTime;
      const windowLoad = navigation_metrics?.domComplete;

      !!ttfb ? perfData.ttfb = ttfb : null;
      !!fcp ? perfData.fcp = fcp : null;
      !!domLoad ? perfData.dom = domLoad : null;
      !!windowLoad ? perfData.window = windowLoad : null;
    });
    navigation_observer.observe({
      entryTypes: ["navigation", "paint", "mark", "measure"],
    });

    let postTimeout;
    postTimeout = setTimeout(function () {
      post(perfData);
      clearTimeout(postTimeout);
    }, 1000);
  }
})();

// Taken From https://www.w3.org/
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      console.log(`Client side analytics For ${entryType} is not supported`);
    }
  }
}
