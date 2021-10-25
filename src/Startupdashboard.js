import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import CardGroup from 'react-bootstrap/CardGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useHistory, Link } from 'react-router-dom';

function Startupdashboard(){

    let history= useHistory();

    return(
        <div>
        <RemoveScrollBar />
        <ButtonGroup className="d-flex">
        <Button variant="outline-dark" onClick={() => {history.push("/Startupdashboard");}}>My Profile</Button>
        <Button variant="outline-dark">Meetings</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/StartupReport");}}>Reports</Button>
        <Button variant="outline-dark"onClick={() => {history.push("/Startuppayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Startuplogin");}}>Logout</Button>
        
        </ButtonGroup>
        <Figure className="mentor-img">
        <Figure.Image
            width={170}
            height={150}
            class="center"
            alt="171x180"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQGimFCMKO9bvA/company-logo_200_200/0/1519952212921?e=2159024400&v=beta&t=95j9ntdG5tllaR0KX4p6A-VNVt1oAcV2QWhtJ3zPlVc"
        />
        <Figure.Caption>
            Startup<br /> Udaan: A B2B platform for small & medium businesses in India. 
        </Figure.Caption>
        </Figure>
        
        <CardGroup>
        <Card>
            <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
            Udaan is planning to increase warehousing capacity five-fold to 5 fold in the next few years to meet the infrastructure required for achieving these business objectives.
            Another Udaan co-founder Vaibhav Gupta said that the firm is expanding into trade ecosystem.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Details</Card.Title>
            <Card.Text>
                Udaan raised $1M in debt and equity. <br />
                Parent Company name : Acuqa <br />
                Funding Series : D
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
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
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardGroup>

        </div>
    
    )
}

export default Startupdashboard;