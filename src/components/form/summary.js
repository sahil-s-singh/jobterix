import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, CardGroup } from 'react-bootstrap'
import {candidate} from './onboarding-form-candidate'
import '../customSelect.scss'

const label={
  title: 'Current Position/Title',
  experience: 'Work experience (years)',
  skills: 'Skills',
  salaryExpectations: 'Salary expectations',
  languages: 'Language (English)',
  employement: 'Employment options',
  geos: 'Cities'
}

const summaryLabels = {
  dreamJob: "Tell us about your professional experience.",
  professionalExperience: "Tell us a little bit about your Dream job"
}

const field = {
  skills: 'skill',
  languages: 'language',
  geos: 'geo'
}

const getRow = (label, value, field) =>(
  <CardGroup key={label} className={`w-100 px-2`} >
    <Card.Text className={`d-flex col-4 text-start`} >
      {label}
    </Card.Text>
    <Card.Text className={`d-flex col-8`} >
      {Array.isArray(value) ? value.map((i, idx)=>(<span key={idx} className={'d-flex align-items-center select-item'}>{i[field]}</span>)
      ): value}
    </Card.Text>
  </CardGroup>
)

function Summary(props){
  const { data, redirectToStep } = props;
  const backTopersonalDetails=()=>redirectToStep(candidate.PERSONAL);
  const backToAbout=()=>redirectToStep(candidate.ABOUT);

  return(
    <>
      <Card className={`p-2 d-flex justify-content-start align-items-start mb-3`}>
        <CardGroup className={`w-100 p-2 pt-0`} >
          <Card.Title className={`col d-flex justify-content-start`}>Special title treatment</Card.Title>
          <Card.Title className={`col d-flex justify-content-end`}><button type="button" onClick={backToAbout} className="btn btn-link">Edit</button></Card.Title>
        </CardGroup>
        {Object.keys(label).map((i)=>getRow(label[i], data[i], field[i]))}
      </Card>
      <Card className={`p-2 d-flex justify-content-start align-items-start`}>
        <CardGroup className={`w-100 p-2 pt-0`} >
          <Card.Title className={`col d-flex justify-content-start`}>Personal details</Card.Title>
          <Card.Title className={`col d-flex justify-content-end`}><button type="button" onClick={backTopersonalDetails} className="btn btn-link">Edit</button></Card.Title>
        </CardGroup>
        {Object.keys(summaryLabels).map((i)=>getRow(summaryLabels[i], data[i], false))}
      </Card>
    </>
  )
}


Summary.propTypes = {
  data: PropTypes.object,
  redirectToStep: PropTypes.func
}

export default Summary