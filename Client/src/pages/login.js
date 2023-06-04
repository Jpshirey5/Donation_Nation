import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? ( <Loading />
      ) : (
        <div className="loginCard">
          <form className="form">
            <p className="form-title">Welcome back</p>
            <div className="input-container">
              <input type="email" placeholder="Enter email" />
              <span></span>
            </div>
            <div className="input-container">
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
            <p className="signup-link">
              No account?
              <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
