import React from 'react';
import ReactDOM from 'react-dom';
import Navigationbar from './Components/Navigationbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Pricing from "./Pricing";
import MentorLogin from "./MentorLogin";
import StartupLogin from "./StartupLogin";
import AdminLogin from "./AdminLogin";
import MentorSignup from "./MentorSignup";
import StartupSignup from "./StartupSignup";
import Mentordashboard from "./Mentordashboard";
import Homepage from './Homepage';
import Startupdashboard from './Startupdashboard';
import Admindashboard from "./Admindashboard";
import MentorForm from "./MentorForm";
import StartupForm from "./StartupForm";
import MentorReport from "./MentorReport";
import MentorPayment from './MentorPayment';
import StartupReport from './StartupReport';
import StartupPayment from './StartupPayment';
import PersonnelSearch from './PersonnelSearch';
import MentorSearch from './MentorSearch';
import StartupMeeting from './StartupMeeting';
import MentorMeeting from './MentorMeeting';
import StartupSearch from './StartupSearch';
import MentorUserSearch from './MentorUserSearch';
import StartupSearchUser from './StartupSearchUser';

function App() {
  return (
    <div>
  <Router>
    <Navigationbar />
    <Switch>
      <Route path="/Homepage" exact component={Homepage} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/mentorLogin" exact component={MentorLogin} />
      <Route path="/startupLogin" exact component={StartupLogin} />
      <Route path="/adminLogin" exact component={AdminLogin} />
      <Route path="/mentorSignup" exact component={MentorSignup} />
      <Route path="/startupSignup" exact component={StartupSignup} />
      <Route path="/mentordashboard" exact component={Mentordashboard} />
      <Route path="/startupdashboard" exact component={Startupdashboard} />
      <Route path="/admindashboard" exact component={Admindashboard} />
      <Route path="/mentorForm" exact component={MentorForm} />
      <Route path="/startupForm" exact component={StartupForm} />
      <Route path="/mentorReport" exact component={MentorReport} />
      <Route path="/mentorPayment" exact component={MentorPayment} />
      <Route path="/startupReport" exact component={StartupReport} />
      <Route path="/startupPayment" exact component={StartupPayment} />
      <Route path="/personnelSearch" exact component={PersonnelSearch} />
      <Route path="/mentorSearch" exact component={MentorSearch} />
      <Route path="/startupMeeting" exact component={StartupMeeting} />
      <Route path="/mentorMeeting" exact component={MentorMeeting} />
      <Route path="/startupSearch" exact component={StartupSearch} />
      <Route path="/mentorUserSearch" exact component={MentorUserSearch} />
      <Route path="/startupSearchUser" exact component={StartupSearchUser} />
    </Switch>
  </Router>
  <Homepage />
  </div>
  );
}

export default App;
