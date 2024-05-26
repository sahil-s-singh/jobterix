import React from "react";
import PropTypes from 'prop-types';
import arrow from "../../images/arrow.svg";
import { Form, Button } from "react-bootstrap";
import "./styles.scss";
import { useForm, useWatch } from "react-hook-form";
import About from './about'
import Personal from './personal'
import Summary from './summary'
import Page from '../common/pages'



export const candidate = 
    Object.freeze(
    {
    "ABOUT":1,
    "PERSONAL":2,
    "SUMMARY": 3
    }
  );
function RecruiterOnboardingForm(props){

}

RecruiterOnboardingForm.propTypes = {
  currentStep: PropTypes.number,
  setStep: PropTypes.func
}

export default Page(RecruiterOnboardingForm);