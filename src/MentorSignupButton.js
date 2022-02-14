import React,{useState} from "react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";

function MentorSignupButton(props){

    let history= useHistory();
    
    const [user, setUser] = useState({
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        const{name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register =() =>{
        const {email,password,reEnterPassword} = user
        if(email && password && (password === reEnterPassword))
        {
            axios.post("http://localhost:3000/MentorForm.js",user).then(res=>console.log(res))
        }
        
    }

    return (
    <div className="mainDiv">
    <RemoveScrollBar />
        <div className="Rectangle-41">
        <p className="Hello-Mentor">{props.text1}</p>
        <p className="Enter-your-personal-details-to-start-with-us">{props.text2}</p>
        <button type="button" className="btn btn-outline-light Rectangle-45 " onClick={() => {history.push("/Mentorlogin");}}>{props.button1}</button>
        </div>
        <div>
        <p className="Login">{props.text3}</p>
        <button type="button" class="btn btn-secondary Rectangle-42 btn-sm">{props.button2}</button>
        <p class="or-use-your-email-account">{props.text4}</p>
        <form>
        <div class="form-group Rectangle-43">
            <label for="exampleInputEmail1">{props.label1}</label>
            <input type="email" name="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange}/>
            <small id="emailHelp" class="form-text text-muted">{props.text5}</small>
        </div>
        <div class="form-group Rectangle-44">
            <label for="exampleInputPassword1">{props.label2}</label>
            <input type="password" name="email"   class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange}/>
        </div>
        <div class="form-group Rectangle-44">
            <label for="exampleInputPassword1">{props.label3}</label>
            <input type="password" name="email"   class="form-control" id="exampleInputPassword1" placeholder=" Confirm Password" onChange={handleChange} />
        </div>
        <p className="Forgot-your-password">{props.text6} </p>
        <button type="submit" class="Rectangle-40" onClick={() => {history.push("/Mentorform");}}>{props.button3}</button>
        </form>
        </div>

    </div>)
}

export default MentorSignupButton;