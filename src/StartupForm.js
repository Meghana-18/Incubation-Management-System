import React from 'react';
import ReactDOM from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import {render} from 'react-dom';
import InputGroup from 'react-bootstrap/InputGroup';


function StartupForm(){


    
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
        <div class="Admin-Login Mentorform">
        <div class="RectangleForm">
        <h3 className="MentorHeading">Startup Registration Form</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Startup name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Team Leader Name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Calendly Email</Form.Label>
            <Form.Control type="text" placeholder="Calendly Email" />
            <Form.Control.Feedback type="invalid">
                Please provide a valid response.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Field</Form.Label>
            <Form.Control type="text" placeholder="Field" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid response.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid response.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} controlId="formFileSm" className="mb-3" md="6">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
        </Form.Group>
     
        </Row>
        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
        </Form.Group>
        
      
        <Button type="submit">Submit form</Button>
        </Form>
    
        
        </div>
        </div>
        </div>
    
    );
}



export default StartupForm;