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

function StartupSearchUser(){

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
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                
            />
             <Figure.Caption className="img-caption">
            Mentor<br /> Sales Mentor: Saving companies time and money with automated expense reports.
        </Figure.Caption>
        </Figure>
        <Card>
            <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
                <ul>
                <li>Website : http://naomitalent.com</li>
                <li>Email : naomiaiready@gmail.com</li>
                <li>Adress: Prospect Place 158, Brooklyn, New-York 11238, US</li>
            </ul>
            </Card.Text>
            </Card.Body>
            
        </Card>
        
        </div>

        </div>
        </div>
    )
}

export default StartupSearchUser;