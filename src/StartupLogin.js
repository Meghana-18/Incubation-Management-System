import React from 'react';
import ReactDOM from 'react-dom';
import StartupLoginButton from "./Components/StartupLoginButton";

function StartupLogin(){
    return(
        <StartupLoginButton 
        text1= "Hello Startup!"
        text2="Enter your personal details to start with us!"
        button1="Sign Up"
        text3="Login!"
        button2="Google"
        text4="or use your email account"
        label1="Email address"
        text5="We'll never share your email with anyone else."
        label2="Password"
        text6="Forgot your password?"
        button3="Submit"
        />
    )
}

export default StartupLogin;
