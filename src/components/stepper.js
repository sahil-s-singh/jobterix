import React from "react";
import PropTypes from 'prop-types';
import tick from "../images/tick.svg";
import { ListGroup } from "react-bootstrap";

const Stepper = ({ steps, currentStep }) => (
  <ListGroup>
    {steps.map((step, idx) => (
      <ListGroup.Item
        key={idx}
        className={
          "d-flex flex-row align-items-center list-style-none border-0 bg-transparent text-white mb-4 text-uppercase ps-0"
        }
      >
        {idx < currentStep ? (
          <img className={"me-2"} height="30" width="30" src={tick} />
        ) : (
          <p
            style={{ height: "32px", width: "32px", padding: "2px 9px" }}
            className={"me-2 mb-0 text-white border border-2 rounded-circle"}
          >
            {idx}
          </p>
        )}
        {step}
      </ListGroup.Item>
    ))}
  </ListGroup>
);


Stepper.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.array
}


export default Stepper;
