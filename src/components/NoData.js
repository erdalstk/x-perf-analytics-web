import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import nodata from "../assets/nodata.svg";
export default function NoData(props) {
  return (
    <Row>
      <Col className="noData">
        <h3>Nothing found !</h3>
        <img
          src={nodata}
          alt="nothing found"
        />
      </Col>
    </Row>
  );
}
