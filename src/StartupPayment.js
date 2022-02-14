import React from "react";
import { useHistory, Link } from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function StartupPayment(){

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
        <Button variant="outline-dark" onClick={() => {history.push("/Startupdashboard");}}>My Profile</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupSearchUser");}}>Mentor Search</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupSearch");}}>Meetings</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupReport");}}>Reports</Button>
        <Button variant="outline-dark"onClick={() => {history.push("/Startuppayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Startuplogin");}}>Logout</Button>
        
        </ButtonGroup>
        </div>
        <div className="mainDiv">
        
        
            <div className="paymentForm">
            <h2> Startup Payment </h2>
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
                Device Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control placeholder="Device" />
                </Col>
            </Form.Group>
            <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
            />
          </Form.Group>
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
            <h2> Device Details </h2>
            <Table striped bordered hover >
            <thead>
                <tr >
                <th >Sr No</th>
                <th width="170">Device Name</th>
                <th width="130">Date</th>
                <th>Duration (Minutes)</th>
                <th width="100">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>3D Printer</td>
                <td>12/10/2021</td>
                <td>75</td>
                <td>Rs. X</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Device A</td>
                <td>5/10/2021</td>
                <td>50</td>
                <td>Rs. Y</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Device B</td>
                <td>1/10/2021</td>
                <td>45</td>
                <td>Rs. Z</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Device C</td>
                <td>30/9/2021</td>
                <td>80</td>
                <td>Rs. P</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Device D</td>
                <td>25/9/2021</td>
                <td>30</td>
                <td>Rs. Q</td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
        </div>
    )
}

export default StartupPayment;