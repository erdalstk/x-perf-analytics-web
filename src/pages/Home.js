import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Services
import { useLoadtimes } from "../services/loadtimes";

// Custom Components
import { chartTypes, timeQueryValues } from "../constants/general";
import LineChart from "../components/LineChart";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import ToggleButtonGroup from "../components/ToggleButtonGroup";

function Home() {
  const [time, setTime] = useState(1440);
  const { isLoading, data, error } = useLoadtimes(time);

  if (error) return "An error has occurred: " + error.message;

  const charts =
    !isLoading && data.length > 0 ? (
      <Row>
        {chartTypes.map((chart, i) => (
          <Col xs={12} sm={12} md={6} lg={6} xl={6} key={chart.lineDataKey}>
            <LineChart
              key={chart.lineDataKey}
              data={data}
              lineDataKey={chart.lineDataKey}
              xAxisDataKey="datetime"
              labelName={chart.labelName}
            />
          </Col>
        ))}
      </Row>
    ) : null;

  return (
    <>
      <ToggleButtonGroup
        activeValue={time}
        onChange={(e) => setTime(parseInt(e.currentTarget.value))}
        options={timeQueryValues}
      />
      {isLoading ? <Loading /> : null}
      {!isLoading && data.length === 0 ? <NoData /> : null}
      {charts}
    </>
  );
}

export default Home;
