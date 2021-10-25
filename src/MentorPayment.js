import React from "react";
import { useHistory, Link } from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function MentorPayment(){

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
        <div>
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
        
        
            <div className="paymentForm">
            <h2> Meeting Payment </h2>
            <Form>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label >
                Startup Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control placeholder="Startup Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
                <Form.Label >
                Total Hours
                </Form.Label>
                <Col sm={10}>
                <Form.Control placeholder="Hours" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
                <Form.Label >
                Price per hour
                </Form.Label>
                <Col sm={10}>
                <Form.Control placeholder="Price" />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column="lg">
                    Meeting type
                </Form.Label>
                
                <Col sm={10}>
                
                    <Form.Check
                    inline
                    type="radio"
                    label="Online"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    inline
                    type="radio"
                    label="Offline"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                    
                </Col>
             
                </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col >
                <Form.Check label="All relevant reports submitted" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Verify</Button>
                </Col>
            </Form.Group>
            </Form>
            </div>
            <div className="paymentCard">
            <h2> Meeting History </h2>
            <Table striped bordered hover >
            <thead>
                <tr >
                <th >Sr No</th>
                <th width="170">Startup Name</th>
                <th width="130">Date</th>
                <th>Duration (Minutes)</th>
                <th width="100">Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Udaan</td>
                <td>12/10/2021</td>
                <td>75</td>
                <td>Online</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Aasmaan</td>
                <td>5/10/2021</td>
                <td>50</td>
                <td>Online</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Aasmaan</td>
                <td>1/10/2021</td>
                <td>45</td>
                <td>Offline</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Aasmaan</td>
                <td>30/9/2021</td>
                <td>80</td>
                <td>Offline</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Aasmaan</td>
                <td>25/9/2021</td>
                <td>30</td>
                <td>Online</td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
        </div>
    )
}

export default MentorPayment;