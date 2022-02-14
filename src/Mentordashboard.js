import React from 'react';
import ReactDOM from 'react-dom';
import Figure from 'react-bootstrap/Figure';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Recents from "./Recents";
import About from "./About";
import Contact from "./Contact";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory, Link } from 'react-router-dom';

function Mentordashboard(){

    let history= useHistory();

    return(
        <div>
        <RemoveScrollBar />
        <ButtonGroup className="d-flex">
        <Button variant="outline-dark" onClick={() => {history.push("/Mentordashboard");}}>My Profile</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorUserSearch");}}>Startup Search</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorSearch");}}>Meetings</Button>
        <Button variant="outline-dark"  onClick={() => {history.push("/Mentorreport");}}>Reports</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/MentorPayment");}}>Payment</Button>
        <Button variant="outline-dark" onClick={() => {history.push("/Mentorlogin");}}>Logout</Button>
        
        </ButtonGroup>
        <Figure className="mentor-img">
        <Figure.Image
            width={170}
            height={150}
            class="center"
            alt="171x180"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Figure.Caption>
            Mentor<br /> Sales Mentor: Saving companies time and money with automated expense reports.
        </Figure.Caption>
        </Figure>
        <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="About">
            <About />
        </Tab>
        <Tab eventKey="profile" title="Recents">
            <Recents />
        </Tab>
        <Tab eventKey="contact" title="Contact">
            <Contact />
        </Tab>
        </Tabs>
        </div>
    
    )
}

export default Mentordashboard;