import React from "react";
import PropTypes from 'prop-types';
import arrow from "../../images/arrow.svg";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./styles.scss";
import { useForm, Controller } from "react-hook-form";
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

function About(props){
const { register, errors, trigger, control, handleSubmit, setValue, clearErrors } = props;
    return(
      <>
      <Row className="mb-5">
      <Form.Group className='d-flex flex-column align-items-start'>
        <Form.Label>Current Position/Title</Form.Label>
        {/* <Form.Control 
          id='title'
          name='title'
          {...register("title", {required: true})}
          required
          type="text"
          placeholder="Enter value here"
          className={Classnames('form-control', {"is-invalid": Boolean(errors?.title)})}
        /> */}
        <select
          id='title'
          name='title'
          className={Classnames('form-control', {"is-invalid": Boolean(errors?.title)})}
          placeholder="Enter value here"
          {...register("title", {required: true})}>
            <option selected disabled value=""></option>
            {titleOptions.map((option)=>
              <option value={option.value} key={option.value}>{option.label}</option>
            )}
        </select>

        {Boolean(errors?.title) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
      </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Work experience (years)</Form.Label>
          <select
            id='experience'
            name='experience'
            className={Classnames('form-control', {"is-invalid": Boolean(errors?.experience)})}
            placeholder="Enter value here"
            {...register("experience")}>
              {experienceOptions.map((option)=>
                <option value={option.value} key={option.value}>{option.label}</option>
              )}
          </select>
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Skills</Form.Label>
            <CustomSelect
              errors={errors}
              trigger={trigger}
              name='skills'
              fieldName='skill'
              control={control}
              handleSubmit={handleSubmit}
              register={register}
              options={skillLevelOptions}
              save={setValue}
              title = {'Add Skills'}
              subTitle = {'Include as many skills as you are capable of.'}
              fieldTwoLabel={'Skills*'}
              fieldOneLabel={'Level'}
              clearErrors={clearErrors}
            />
         
          {Boolean(errors?.skills) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
        </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Salary expectations</Form.Label>
          <select
            id='salaryExpectation'
            name='salaryExpectation'
            className={Classnames('form-control', {"is-invalid": Boolean(errors?.salaryExpectation)})}
            placeholder="Enter value here"
            {...register("salaryExpectations")}>
              {salaryExpectationOptions.map((option)=>
                <option value={option.value} key={option.value}>{option.label}</option>
              )}
          </select>
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Language (English)</Form.Label>
            <CustomSelect
              errors={errors}
              trigger={trigger}
              name='languages'
              fieldName='language'
              control={control}
              handleSubmit={handleSubmit}
              register={register}
              options={languageOptions}
              save={setValue}
              title = {'Add Language'}
              subTitle = {'Add as many languages as you are fluent in.'}
              fieldTwoLabel={'Language*'}
              fieldOneLabel={'Proficiency'}
              clearErrors={clearErrors}
            />
            {Boolean(errors?.languages) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
        </Form.Group>
      </Row>
      <Row className="mb-5">
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Employment options</Form.Label>
          <select
            id='employement'
            name='employement'
            className={Classnames('form-control', {"is-invalid": Boolean(errors?.salaryExpectation)})}
            placeholder="Enter value here"
            {...register("employement")}>
              {employmentOptions.map((option)=>
                <option value={option.value} key={option.value}>{option.label}</option>
              )}
          </select>
        </Form.Group>
        <Form.Group className='d-flex flex-column align-items-start' as={Col}>
          <Form.Label>Preferred geographies</Form.Label>
            <CustomSelect
              errors={errors}
              trigger={trigger}
              name='geos'
              fieldName='geo'
              control={control}
              handleSubmit={handleSubmit}
              register={register}
              options={geoOptions}
              save={setValue}
              title = {'Add Skills'}
              subTitle = {'Include as many skills as you are capable of.'}
              fieldTwoLabel={'Language*'}
              fieldOneLabel={'Proficiency'}
              clearErrors={clearErrors}
            />
            {Boolean(errors?.geos) && <Form.Control.Feedback className='d-flex' type='invalid'>Required</Form.Control.Feedback>}
        </Form.Group>
      </Row>
      </>
    )
}

About.propTypes = {
  register: PropTypes.any,
  errors: PropTypes.any,
  trigger: PropTypes.any,
  control: PropTypes.any,
  handleSubmit: PropTypes.func,
  setValue: PropTypes.func,
  clearErrors: PropTypes.any
}

export default About