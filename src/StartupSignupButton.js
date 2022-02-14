import React from "react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useHistory, Link } from 'react-router-dom';

function StartupSignupButton(props){

    let history= useHistory();

    return (<div className="mainDiv">
    <RemoveScrollBar />
        <div className="Rectangle-41">
        <p className="Hello-Mentor">{props.text1}</p>
        <p className="Enter-your-personal-details-to-start-with-us">{props.text2}</p>
        <button type="button" className="btn btn-outline-light Rectangle-45 " onClick={() => {history.push("/Startuplogin");}}>{props.button1}</button>
        </div>
        <div>
        <p className="Login">{props.text3}</p>
        <button type="button" class="btn btn-secondary Rectangle-42 btn-sm">{props.button2}</button>
        <p class="or-use-your-email-account">{props.text4}</p>
        <form>
        <div class="form-group Rectangle-43">
            <label for="exampleInputEmail1">{props.label1}</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">{props.text5}</small>
        </div>
        <div class="form-group Rectangle-44">
            <label for="exampleInputPassword1">{props.label2}</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group Rectangle-44">
            <label for="exampleInputPassword1">{props.label3}</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder=" Confirm Password" />
        </div>
        <p className="Forgot-your-password">{props.text6} </p>
        <button type="submit" class="Rectangle-40" onClick={() => {history.push("/Startupform");}}>{props.button3}</button>
        </form>
        </div>

    </div>)
}

export default StartupSignupButton;