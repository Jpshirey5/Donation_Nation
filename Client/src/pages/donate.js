import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Loading from "../components/loading";

export default function Donate() {
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
        <h1 className="donate">
          All donations are made through Stripe
          <Footer />
        </h1>
      )}
    </>
  );
}
