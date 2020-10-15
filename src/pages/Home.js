import React from "react";
import { useQuery } from "react-query";
import LineChart from "../components/LineChart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const { isLoading, error, data } = useQuery(
    "loadtimes",
    () =>
      fetch(
        "https://x-perf-analytics-api.herokuapp.com/loadtimes"
      ).then((res) => res.json()),
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <LineChart data={data} lineDataKey="ttfb" xAxisDatKey="datetime"  labelName="Time To First Byte"/>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <LineChart data={data} lineDataKey="fcp" xAxisDatKey="datetime" labelName="First Contentful Paint"/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <LineChart data={data} lineDataKey="dom" xAxisDatKey="datetime" labelName="DOM Load"/>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <LineChart data={data} lineDataKey="window" xAxisDatKey="datetime" labelName="Window Load"/>
        </Col>
      </Row>
    </>
  );
}

export default Home;
