import React from 'react';
import ReactDOM from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function MentorReport(){

    let history= useHistory();

    const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };

    return(
        <div >
        <RemoveScrollBar />
        <div>
        
        <ButtonGroup className="d-flex">
        <Button variant="outline-dark" onClick={() => {history.push("/Mentordashboard");}}>My Profile</Button>
        <Button variant="outline-dark">Meetings</Button>
        <Button variant="outline-dark"  onClick={() => {history.push("/Mentorreport");}}>Reports</Button>
        
        <Button variant="outline-dark" onClick={() => {history.push("/MentorPayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Mentorlogin");}}>Logout</Button>
        
        </ButtonGroup>
        </div>
        <div className="mainDiv">
        <div className="Rectangle-41 ">
        <h6 className="Hello-Mentor">Upload Report</h6>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="MentorReportUpload">
        <Form.Group as={Col} controlId="formFileSm" className="mb-3">
        <Form.Control type="file" size="sm" />
        </Form.Group>
        <button type="button" className="btn btn-outline-light Rectangle-45 ReportButton ">Submit Report</button>
        </Form>
        </div>
        <div className="createdForm">
        <h3>Evaluation Form</h3>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Startup Name</Form.Label>
            <Form.Control placeholder="Enter Startup Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder="Date" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" >
            <Form.Label>Agenda</Form.Label>
            <Form.Control placeholder="Discuss business model..." />
            
        </Form.Group>
        <Form.Label>Assigned Tasks</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Tasks assigned are...">
        <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        />
        </FloatingLabel>

        <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Label>Performance</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Previous tasks completed?</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Yes</option>
                <option>No</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Rating</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        
        </div>

        </div>
        </div>
    )

}

export default MentorReport;