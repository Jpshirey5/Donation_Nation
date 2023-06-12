import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARITY } from '../Utils/mutations';

export default function CreateCharity() {
  console.log('test');
  const [addCharity, loading,] = useMutation(ADD_CHARITY);

  const [formState, setFormState] = useState({
    charityName: '',
    description: '',
    goal: '',
    stripeLink: '',

  });

  const handleInputChange = (e) => {
    console.log(formState);
    console.log("hit")
    if (e.target.name === 'goal') {
      setFormState({ ...formState, [e.target.name]: parseInt(e.target.value) })
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }


  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)

    // Retrieve input values from the form
    // const charityName = document.getElementById('charityNameInput').value;
    // const description = document.getElementById('descriptionInput').value;
    // const goal = parseInt(document.getElementById('goalInput').value);
    // const stripeLink = document.getElementById('stripeLinkInput').value;

    try {


      // Perform the mutation
      await addCharity({
        variables: {
          ...formState
        },
      });

      setFormState({
        charityName: '',
        description: '',
        goal: '',
        stripeLink: '',
      })
    } catch (err) {
      console.log(err.message);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="signup-form">
      {console.log("test")}
      <p className="title">Create your Charity </p>
      <p className="message">Get started to share your project with the world! </p>
      <div className="flex">
      </div>
      <span>Charity Name</span>
      <input id="charityNameInput" value={formState.charityName} onChange={handleInputChange} name="charityName" type="text" className="input" />
      <span>Description</span>
      <input id="descriptionInput" value={formState.description} onChange={handleInputChange} name="description" type="text" className="input" />
      <span>Goal</span>
      <input id="goalInput" value={formState.goal} onChange={handleInputChange} name="goal" type="text" className="input" />
      <span>Stripe</span>
      <input id="stripeLinkInput" value={formState.stripeLink} onChange={handleInputChange} name="stripeLink" placeholder="insert hyperlink" type="text" className="input" />
      <button type="submit" className="submit">Create</button>
    </form>
  )
}