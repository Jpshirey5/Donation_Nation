import React, { useState, useEffect } from 'react';
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
        <div className="homepage">
          <h1>Home Page</h1>
          <p>Welcome and Intro Content will go on this page.</p>
        </div>
      )}
    </>
  );
}
