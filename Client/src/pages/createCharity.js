import React from 'react';

export default function Login() {
 
  return (
   
        <form className="signup-form">
        <p className="title">Create your Charity </p>
        <p className="message">Get started to share your project with the world! </p>
            <div className="flex">
        </div>  
                
        <label>
            <input required="" placeholder="" type="text" className="input"></input>
            <span>Charity Name</span>
        </label>  

        <label>
            <input required="" placeholder="" type="text" className="input"></input>
            <span>Description</span>
        </label> 
            
        <label>
            <input required="" placeholder="" type="text" className="input"></input>
            <span>Goal</span>
        </label>
        <label>
            <input required="" placeholder="insert hyperlink" type="text" className="input"></input>
            <span>Stripe</span>
        </label>
        <button className="submit">Create</button>
    </form>
      )}