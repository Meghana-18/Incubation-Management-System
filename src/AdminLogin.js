import React from 'react';
import ReactDOM from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory} from 'react-router-dom';

function AdminLogin(){

    let history= useHistory();

    return(
        <div >
        <RemoveScrollBar />
        <div class="Admin-Login">
        <div class="Rectangle-54">
        <p className="admin-login-text">Admin Login!</p>
        <button type="button" class="btn btn-secondary btn-sm admin-button">Google</button>
        <p class="admin-email">or use your email account</p>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <button type="submit"  type="submit" className="admin-submit-button" onClick={() => {history.push("/Admindashboard");}}>
            Submit
        </button>
        </Form>
        </div>
        </div>
        </div>
    )
}

export default AdminLogin;
