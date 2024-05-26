import React from 'react';
import Page from '../components/common/pages'
import { useHistory } from "react-router-dom";

function UserSelection(){
  let history = useHistory();
  console.log(history, 'historyhistory')
  return <>
  <div onClick={()=>{history.push('/candidate-onboarding')}}>qqq</div>
  <div onClick={()=>{history.push('/recruiter-onboarding')}}>qqq</div>
  </>
}

export default Page(UserSelection)