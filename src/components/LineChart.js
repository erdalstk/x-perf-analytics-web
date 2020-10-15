import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const formatLocale = !!navigator ? navigator.language : "en-EN";
const formatDate = (date) => {
  if (!date) {
    return;
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(
    formatLocale,
    options
  );

  return formattedDate;
};

const CustomTooltip = ({ active, payload, label, longLabelName }) => {
  console.log("payload", payload);
  if (active) {
    return (
      <div className="custom-tooltip">
        <h3>{formatDate(payload[0]?.payload?.datetime)}</h3>
        <p>
          {" "}
          {payload[0]?.value?.toFixed(0)} - {longLabelName}
        </p>
      </div>
    );
  }

  return null;
};

const lineChart = (props) => {
  const { data, lineDataKey, xAxisDatKey, labelName } = props;

  return (
    <div className="chartContainer">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDatKey} hide />
          <YAxis />
          <Tooltip content={<CustomTooltip longLabelName={labelName} />} />
          <Legend />
          <Line
            type="monotone"
            dataKey={lineDataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default lineChart;
