import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? ( <Loading />
      ) : (
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
        <button className="submit">Submit</button>
        <p className="signin">Already have an acount ? <Link to="/login">Sign in</Link></p>
    </form>
      )}
    </>
  );
}
