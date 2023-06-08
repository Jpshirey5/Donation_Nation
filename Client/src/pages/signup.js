import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  
  return (
   
        <form className="signup-form">
        <p className="title">Signup </p>
        <p className="message">Get started to gain full access to our site. </p>
            <div className="flex">
            <label>
                <input required="" placeholder="" type="text" className="input"></input>
                <span>Firstname</span>
            </label>
    
            <label>
                <input required="" placeholder="" type="text" className="input"></input>
                <span>Lastname</span>
            </label>
        </div>  
                
        <label>
            <input required="" placeholder="" type="email" className="input"></input>
            <span>Email</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="password" className="input"></input>
            <span>Password</span>
        </label>
        <label>
            <input required="" placeholder="" type="password" className="input"></input>
            <span>Confirm password</span>
        </label>
        <Link to="/submitThanks"><button className="submit">Submit</button></Link>
        <p className="signin">Already have an account? <Link to="/login"> Sign in</Link></p>
    </form>
      )}