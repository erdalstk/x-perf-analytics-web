import { useQuery } from "react-query";
import { defaultHeaders } from "./constants";

const useLoadtimes = (useLoadtimeQueryData) => {
  const queryDataObj = {
    timeInterval: useLoadtimeQueryData,
  };
  return useQuery(
    `loadtimes_${useLoadtimeQueryData}`,
    async () => {
      const response = await fetch(
        // "https://x-perf-analytics-api.herokuapp.com/loadtimes",
        "http://localhost:4000/loadtimes",
        {
          method: "POST",
          body: !!useLoadtimeQueryData
            ? JSON.stringify(queryDataObj)
            : "",
          headers: {
            ...defaultHeaders,
          },
        }
      );
      const data = await response.json();

      return data;
    },
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
    }
  );
};

export { useLoadtimes };
