import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Components/loading';
import { validateEmail } from '../Utils/email';
import { validatePassword } from '../Utils/password';
//import { useMutation } from '@apollo/client';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if(inputType === 'password') {
      setPassword(inputValue);
    } else{
      setMessage(inputValue)
    }
  };
  const handleOnBlur = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    } else if (!validatePassword(password)) {
      setErrorMessage('password is invalid');
    }
    return;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (<Loading />
      ) : (
        <div className="loginCard">
          <form className="form">
            <p className="form-title">Welcome back</p>
            <div className="input-container">
              <input value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                type="email"
                placeholder="Enter email" />
              <span></span>
            </div>
            <div className="input-container">
              <input value={password}
                name="password"
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                type="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
            <p className="signup-link">
              No account?
              <Link to="/signup">Sign up</Link>
            </p>
            <p className="signup-link">
              Not ready to login?
              <Link to="/home">Continue as Guest</Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
