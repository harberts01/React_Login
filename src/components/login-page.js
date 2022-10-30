import React from "react";
import LoginBtn from "./submit-btn";
import NavBar from "./nav-bar";

export default class LoginPage extends React.Component {
    render(){
        return (
            <div className="Page">
                <NavBar />
                <div className="contactForm">
                    <h2>Login</h2>
                    <input type='text' placeholder='Email'></input><br/><br/>
                    <input type='password' placeholder='Password'></input><br/><br/>
                    <LoginBtn/>
                </div>
            </div>
        )
    }
}