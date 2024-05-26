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
function CandidateOnboardingForm(props){
  const { setStep, currentStep } = props;
  const [validated, setValidated] = React.useState(false);
  const {  handleSubmit, register, formState: { errors }, control, trigger, getValues, setError, clearErrors, setValue, reset } = useForm({
    defaultValues: {
      title: '',
      experience: '',
      salaryExpectations: '1',
      employement: '',
      skills: [
        { skill: 'skill-1', level: "1" }
      ],
      languages: [
        { language: 'english', level: "1" },
        { language: 'french', level: "3" }
      ],
      geos: [
        { geo: 'geo-1', level: "1" },
        { geo: 'geo-2', level: "3" }
      ]
    }
  });
  
  const onSubmit = async(event) => {
  console.log(event, 'forxxxm')
  const form = event.currentTarget;
  };

  const next = async() =>{
    const errorFields = []
    // const values = getValues();
    // if(currentStep === candidate.ABOUT){
    //   !values['skills'].length && errorFields.push('skills');
    //   !values['languages'].length && errorFields.push('languages');
    //   !values['geos'].length && errorFields.push('geos');
    //   errorFields.map((e)=>{
    //     setError(e);
    //   })
    // }
      !errorFields.length && setStep(currentStep + 1)
  }
  
  const previous = () =>{
    setStep(currentStep - 1)
  }

  const updateInitialValues = (fieldName, value)=>{
    reset({
      ...control.defaultValuesRef.current,
      [fieldName]: value
    }, {keepValues: true})
  }

  const getTitleBasedOnStep = (step) => {
    console.log(step, 'step')
    let title = 'title'
    switch(step) {
      case candidate.PERSONAL:
        title = 'Tell us more about the yourself.'
        break;
      case candidate.ABOUT:
        title = 'Tell us more about the yourself.'
        break;
      case candidate.SUMMARY:
        title = 'Summary'
        break;
      default:
        break;
    }
    return title
  }
  const getSubTitleBasedOnStep = (step) => {
    let subTitle = 'title';
    switch(step) {
      case candidate.PERSONAL:
        subTitle = 'We suggest using the email address you use at work.'
        break;
      case candidate.ABOUT:
        subTitle = 'We suggest using the email address you use at work.'
        break;
      case candidate.SUMMARY:
        subTitle = 'We suggest using the email address you use at work.'
        break;
      default:
        break;
    }
    return subTitle
  }

  return( 
  <div  style={{maxWidth: '614px'}} className='container d-flex align-items-center justify-content-between flex-column'>
    <h1 className="d-flex w-100">{getTitleBasedOnStep(currentStep)}</h1>
    <h6 className="d-flex w-100">{getSubTitleBasedOnStep(currentStep)}</h6>

    <Form className={'mt-5 w-100'} noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
      {currentStep === candidate.ABOUT &&
        <About 
          register={register}
          errors={errors}
          trigger={trigger}
          control={control}
          setValue={updateInitialValues}
          clearErrors={clearErrors}
        />} 
      {currentStep === candidate.ABOUT && <Personal register={register} errors={errors} />}
      {currentStep === candidate.ABOUT && <Summary redirectToStep={setStep} data={getValues()} />}
      <div className="col-12 d-flex justify-content-between mt-5">
      {currentStep > 1 ? <Button className='text-uppercase border-0' variant="outline-primary" onClick={previous} type="button">Previous step</Button> : <span></span>}
      <Button 
        onClick={next} 
        type="button"
        // type="submit"
        className={'btn-orange'}
      >
        Next Step
        <img
          height="11"
          width="16"
          src={arrow}
        />
      </Button>
      </div>
    </Form>
  </div>
  )
}

CandidateOnboardingForm.propTypes = {
  currentStep: PropTypes.number,
  setStep: PropTypes.func
}

export default Page(CandidateOnboardingForm);