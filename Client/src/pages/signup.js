// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../Utils/mutations';

// export default function Login() {
//     const [addUser, { loading }] = useMutation(ADD_USER);

//     const handleSubmit = (event) => {
//       event.preventDefault();

//       // Retrieve input values from the form
//       const firstName = document.getElementById('firstNameInput').value;
//       const lastName = document.getElementById('lastNameInput').value;
//       const email = document.getElementById('emailInput').value;
//       const password = document.getElementById('passwordInput').value;

//       // Perform the mutation
//      addUser({
//         variables: {
//           firstName,
//           lastName,
//           email,
//           password,
//         },
//        })

//         .then((response) => {
//             // Handle the response after the mutation is successful
//             console.log('User added:', response.data.addUser);
//          })
//         .catch((error) => {
//            // Handle any errors that occur during the mutation
//            console.error('Error adding user:', error);
//         });

//       // Reset the form after submission
//       document.getElementById('firstNameInput').value = '';
//       document.getElementById('lastNameInput').value = '';
//       document.getElementById('emailInput').value = '';
//       document.getElementById('passwordInput').value = '';
//     };

//   return (

//     <form onSubmit={handleSubmit} className="signup-form">
//       <p className="title">Signup </p>
//       <p className="message">Get started to gain full access to our site. </p>
//           <div className="flex">
//         </div>

//         <label>
//           <input id="firstNameInput" placeholder="" type="text" className="input"></input>
//           <span>Firstname</span>
//         </label>

//         <label>
//           <input id="lastNameInput" placeholder="" type="text" className="input"></input>
//           <span>Lastname</span>
//         </label>
      

//       <label>
//         <input id="emailInput" placeholder="" type="text" className="input"></input>
//         <span>Email</span>
//       </label>

//       <label>
//         <input id="passwordInput" placeholder="" type="text" className="input"></input>
//         <span>Password</span>
//       </label>
//       <button type='submit' disabled={loading} className="submit">Submit</button>
//       <p className="signin">Already have an account? <Link to="/login"> Sign in</Link></p>
//     </form>
//   )
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../Utils/mutations';

export default function Login() {
  const [addUser, { loading }] = useMutation(ADD_USER);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addUser({
      variables: {
        ...formData
      }
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
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <p className="title">Signup</p>
      <p className="message">Get started to gain full access to our site.</p>

      <label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Firstname</span>
      </label>

      <label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Lastname</span>
      </label>

      <label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Email</span>
      </label>

      <label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Password</span>
      </label>

      <Link to='/submitThanks'><button type="submit" disabled={loading} className="submit">
        Submit
      </button></Link>

      <p className="signin">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}
