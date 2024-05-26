import React from "react";
import PropTypes from 'prop-types';
import onboarding from "../../../images/onboarding.png";
import logo from "../../../images/jobTerix-logo-white.svg";
import "./styles.scss";
import Stepper from '../../stepper'
/* eslint-disable */
// import OnboardingForm from '../../form/onboarding-form-candidate'
// import UserSelection from '../../userSelection'

// eslint-disable-next-line no-sparse-arrays
const steps = [
  "Decide who you want to be",
  "Tell us more about the yourself",
  "Personal Details",
  "Summary",
];

export const candidate = 
    Object.freeze(
    {
    "USERTYPE":0,
    "ABOUT":1,
    "PERSONAL":2,
    "SUMMARY": 3
    }
  );
  const Page = (BaseComponent) => (props) => {
  const [currentStep, setStep] = React.useState(1);
  const [userType, setUserType] = React.useState(null);

  return (
    <div className="d-flex flex-row justify-content-between">
      <div className={"p-5 d-flex flex-column justify-content-start"}>
        <div style={{ position: "absolute", left: "0", top: "0" }}>
          <img
            style={{ zIndex: "-1", height: "100vh", width: "100%" }}
            src={onboarding}
          />
        </div>
        <img
          className={"mb-5"}
          style={{ zIndex: "1" }}
          height="50"
          width="117"
          src={logo}
        />
        <div className={"mt-5"}>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
      </div>
      <div
        style={{ width: "calc(100% - 485px)", height: "100vh" }}
        className="d-flex flex-column justify-content-start  p-5"
      >
      <BaseComponent  setStep={setStep} currentStep={currentStep}  {...props}/>
        {/* <UserSelection setUserType={setUserType} />
       <OnboardingForm setStep={setStep} currentStep={currentStep} /> */}
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any
}


export default Page;
