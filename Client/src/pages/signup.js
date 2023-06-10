import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../Utils/mutations';


export default function Login() {
    const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve input values from the form
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Perform the mutation
    addUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    })
      .then((response) => {
        // Handle the response after the mutation is successful
        console.log('User added:', response.data.addUser);
      })
      .catch((error) => {
        // Handle any errors that occur during the mutation
        console.error('Error adding user:', error);
      });

    // Reset the form after submission
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('passwordInput').value = '';
  };

  return (
   
        <form onSubmit={handleSubmit} className="signup-form">
        <p className="title">Signup </p>
        <p className="message">Get started to gain full access to our site. </p>
            <div className="flex">
            <label>
                <input id="firstNameInput" required="" placeholder="" type="text" className="input"></input>
                <span>Firstname</span>
            </label>
    
            <label>
                <input id="lastNameInput" required="" placeholder="" type="text" className="input"></input>
                <span>Lastname</span>
            </label>
        </div>  
                
        <label>
            <input id="emailInput" required="" placeholder="" type="email" className="input"></input>
            <span>Email</span>
        </label> 
            
        <label>
            <input id="passwordInput" required="" placeholder="" type="password" className="input"></input>
            <span>Password</span>
        </label>
        <label>
            <input required="" placeholder="" type="password" className="input"></input>
            <span>Confirm password</span>
        </label>
        <Link to="/submitThanks"><button type='submit' disabled={loading} className="submit">Submit</button></Link>
        <p className="signin">Already have an account? <Link to="/login"> Sign in</Link></p>
    </form>
      )}