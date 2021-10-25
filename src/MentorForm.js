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


function MentorForm(){


    
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
        <h3 className="MentorHeading">Mentor Registration Form</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
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
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid state.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Designation" required />
            
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>Expertise</Form.Label>
            <Form.Control type="text" placeholder="Expertise" required />
            
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom08">
            <Form.Label>Experience</Form.Label>
            <Form.Control type="text" placeholder="Experience" required />
            
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



export default MentorForm;