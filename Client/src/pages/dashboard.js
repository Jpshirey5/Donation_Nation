import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import Loading from "../Components/loading";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <h1 className="dash-title">Dashboard</h1>
          <Footer />
        </div>
      )}
    </>
  );
}
