import React from 'react';
import ReactDOM from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormControl from 'react-bootstrap/FormControl';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

function MentorUserSearch(){

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
        <div className="searchResult">
        <h3>Details</h3>
        <Figure>
        <Figure.Image
            width={130}
            height={100}
            className="searchImage"
            alt="171x180"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQGimFCMKO9bvA/company-logo_200_200/0/1519952212921?e=2159024400&v=beta&t=95j9ntdG5tllaR0KX4p6A-VNVt1oAcV2QWhtJ3zPlVc"
             />
             <Figure.Caption className="img-caption">
            Startup<br /> Udaan: A B2B platform for small & medium businesses in India. 
        </Figure.Caption>
        </Figure>
        <Card>
            <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
                <ul>
                <li>Website : http://udaansky.com</li>
                <li>Email : udaanflyhigh@gmail.com</li>
                <li>Adress: Prospect Place 158, Hyderabad, Telangana, India</li>
            </ul>
            </Card.Text>
            </Card.Body>
            
        </Card>
        
        </div>

        </div>
        </div>
    )
}

export default MentorUserSearch;