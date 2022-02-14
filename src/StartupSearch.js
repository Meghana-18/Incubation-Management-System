import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {InlineWidget} from 'react-calendly';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function StartupSearch(){

    let history= useHistory();


    return(
        <div >
        <RemoveScrollBar />
        <div>
        
        <ButtonGroup className="d-flex">
        <Button variant="outline-dark" onClick={() => {history.push("/Startupdashboard");}}>My Profile</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupSearchUser");}}>Mentor Search</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupSearch");}}>Meetings</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupReport");}}>Reports</Button>
        <Button variant="outline-dark"onClick={() => {history.push("/Startuppayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Startuplogin");}}>Logout</Button>
        
        </ButtonGroup>
        </div>
        <div className="mainDiv">
        <div className="Rectangle-41 ">
        <h6 className="Hello-Mentor">Mentor Search</h6>
        <Form className="d-flex searchBar">
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-5"
            aria-label="Search"
        />
        <Button variant="secondary" onClick={() => {history.push("/StartupMeeting");}}>Search</Button>
        </Form>
        </div>
        <div >
       
        </div>

        </div>
        </div>
    )
}

  /* const Calendly = () => {
    return (
      <div style={{ height: "800px" }}>
        <iframe
          src="https://calendly.com/meghana-maringanty/15min"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    );
  }; */
  
  export default StartupSearch;
  
