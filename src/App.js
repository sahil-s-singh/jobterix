import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserSelection from "./components/userSelection";
import RecruiterOnboardingForm from './components/form/onboarding-form-recruiter'
import CandidateOnboardingForm from './components/form/onboarding-form-candidate'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={UserSelection}/>
            <Route path="/candidate-onboarding" component={CandidateOnboardingForm}/>
            <Route path="/recruiter-onboarding" component={RecruiterOnboardingForm}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
