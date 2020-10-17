const timeQueryValues = [
  { name: "15m", value: 15, text: 'Values in the last 15 minutes' },
  { name: "30m", value: 30, text: 'Values in the last 30 minutes' },
  { name: "1h", value: 60, text: 'Values in the last 1 hour' },
  { name: "3h", value: 180, text: 'Values in the last 3 hours' },
  { name: "24h", value: 1440, text: 'Values in the last 24 hours' },
  { name: "3d", value: 4320, text: 'Values in the last 3 days' },
];

const chartTypes = [
  {
    lineDataKey: "ttfb",
    labelName: "Time To First Byte",
  },
  {
    lineDataKey: "fcp",
    labelName: "First Contentful Paint",
  },
  {
    lineDataKey: "dom",
    labelName: "DOM Load",
  },
  {
    lineDataKey: "window",
    labelName: "Window Load",
  }
];

export { chartTypes, timeQueryValues };
