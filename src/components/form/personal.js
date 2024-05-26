import React from "react";
import PropTypes from 'prop-types';
import arrow from "../../images/arrow.svg";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./styles.scss";
import { useForm } from "react-hook-form";
import Classnames from 'classnames'
import CustomSelect from '../customSelect'



const titleOptions = [
  {label: 'title-1', value: 1},
  {label: 'title-2', value: 2},
  {label: 'title-3', value: 3},
  {label: 'title-4', value: 4},
  {label: 'title-5', value: 5}
]
const skillLevelOptions = [
  {label: '1-2', value: "1"},
  {label: '3-5', value: "2"},
  {label: '6-10', value: "3"},
  {label: '10+', value: "4"}
]
const experienceOptions = [
  {label: 'experience-1', value: 1},
  {label: 'experience-2', value: 2},
  {label: 'experience-3', value: 3},
  {label: 'experience-4', value: 4},
  {label: 'experience-5', value: 5}
]
const salaryExpectationOptions = [
  {label: 'expectation-1', value: 1},
  {label: 'expectation-2', value: 2},
  {label: 'expectation-3', value: 3},
  {label: 'expectation-4', value: 4},
  {label: 'expectation-5', value: 5}
]
const languageOptions = [
  {label: 'proficiency-1', value: 1},
  {label: 'proficiency-2', value: 2},
  {label: 'proficiency-3', value: 3},
  {label: 'proficiency-4', value: 4},
  {label: 'proficiency-5', value: 5}
]
const employmentOptions = [
  {label: 'employment-1', value: 1},
  {label: 'employment-2', value: 2},
  {label: 'employment-3', value: 3},
  {label: 'employment-4', value: 4},
  {label: 'employment-5', value: 5}
]
const geoOptions = [
  {label: 'geo-1', value: 1},
  {label: 'geo-2', value: 2},
  {label: 'geo-3', value: 3},
  {label: 'geo-4', value: 4},
  {label: 'geo-5', value: 5}
]

function Personal(props){
const { register, errors } = props
  return(
    <><Row className="mb-5">
    <Form.Group className='d-flex flex-column align-items-start mb-5'>
      <Form.Label>Tell us about your professional experience.</Form.Label>
      <Form.Control 
        id='professionalExperience'
        name='professionalExperience'
        {...register("professionalExperience", {required: true})}
        required
        style={{height: '112px'}}
        type="text"
        as="textarea"
        placeholder="Enter value here"
        className={Classnames('form-control', {"is-invalid": Boolean(errors?.title)})}
      />
      {Boolean(errors?.title) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
    </Form.Group>
    <Form.Group className='d-flex flex-column align-items-start'>
      <Form.Label>Tell us a little bit about your Dream job</Form.Label>
      <Form.Control 
        id='dreamJob'
        name='dreamJob'
        {...register("dreamJob", {required: true})}
        required
        style={{height: '112px'}}
        type="text"
        as="textarea"
        placeholder="Enter value here"
        className={Classnames('form-control', {"is-invalid": Boolean(errors?.title)})}
      />
      {Boolean(errors?.title) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
    </Form.Group>
  </Row></>
  )
}

Personal.propTypes = {
  register: PropTypes.any,
  errors: PropTypes.any,
//   trigger: PropTypes.any,
//   control: PropTypes.any,
//   handleSubmit: PropTypes.func
}

export default Personal