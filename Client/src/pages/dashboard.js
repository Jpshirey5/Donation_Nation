import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Loading from "../components/loading";

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
