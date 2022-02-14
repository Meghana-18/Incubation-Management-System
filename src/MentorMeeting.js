import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {InlineWidget} from 'react-calendly';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function MentorMeeting(){

    let history= useHistory();


    return(
        <div >
        <RemoveScrollBar />
        <div>
        
        <ButtonGroup className="d-flex">
        <Button variant="outline-dark" onClick={() => {history.push("/Mentordashboard");}}>My Profile</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorUserSearch");}}>Startup Search</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorSearch");}}>Meetings</Button>
        <Button variant="outline-dark"  onClick={() => {history.push("/Mentorreport");}}>Reports</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorPayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Mentorlogin");}}>Logout</Button>
        
        </ButtonGroup>
        </div>
        <div className="mainDiv">
        <div className="Rectangle-41 ">
        <h6 className="Hello-Mentor">Startup Search</h6>
        <Form className="d-flex searchBar">
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-5"
            aria-label="Search"
        />
        <Button variant="secondary">Search</Button>
        </Form>
        </div>
        <div >
        
        <div style={{ height: "550px" }}>
        <iframe
          src="https://calendly.com/meghana-maringanty/15min"
          width="250%"
          height="95%"
          frameborder="0"
        ></iframe>
      </div>
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
  
  export default MentorMeeting;
  
