import React from 'react';
import ReactDOM from 'react-dom';
import MentorSignupButton from './MentorSignupButton';


function MentorSignup(){
    return(
        <MentorSignupButton 
        text1= "Welcome Mentor!"
        text2="To stay connected and continue your progress enter your personal details."
        button1="Login"
        text3="Sign Up!"
        button2="Google"
        text4="or use your email for registration"
        label1="Email address"
        text5="We'll never share your email with anyone else."
        label2="Password"
        label3="Confirm Password"
        text6="Forgot your password?"
        button3="Submit"
        />
    )
}

export default MentorSignup;