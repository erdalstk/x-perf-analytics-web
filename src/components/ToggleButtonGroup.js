import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ToggleButton from "react-bootstrap/ToggleButton";
import Tooltip from 'react-bootstrap/Tooltip'

const ToggleButtonGroup = ({ activeValue, onChange, options }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <ButtonGroup toggle className="toggleButtonGroup">
          {options.map((option, idx) => (
            <OverlayTrigger
              key={`overlay-${idx}`}
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-${idx}`}>{option.text}</Tooltip>
              }
            >
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={option.value}
                checked={activeValue === option.value}
                onChange={onChange}
              >
                {option.name}
              </ToggleButton>
            </OverlayTrigger>
          ))}
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default ToggleButtonGroup;
