import React from "react";
import Footer from "../Components/footer";
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARITY } from "../Utils/queries"

export default function Dashboard() {
  const { loading, error, data } = useQuery(QUERY_CHARITY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { charity } = data;


  return (

    <div>
      <div className="dashboard">
        <h1 className="dash-title">Dashboard</h1>

        <div className="dash-container">
          <div className="column">
            <section className="donated-column">
              <h3 className="donated-title">Previously Donated</h3>
              <div className="donated-history">Compassion Cares $500</div>
            </section>
          </div>

            <div>
              {charity.map((item) => (
                <div key={item._id} className="card">
                  <h3 className="dash-card-title">{item.charityName}</h3>
                  <p className="dash-card-text">{item.description}</p>
                  <p>Goal: {item.goal}</p>
                  <a href={item.stripeLink} className="donate-btn">Donate</a>
                </div>
              ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
{/* <div className="cards">
<div className="dash-card">
  <h2 className="dash-card-title">Harmony Hope Foundation</h2>
  <p className="dash-card-text">
    The Harmony Hope Foundation is dedicated to promoting unity and harmony within communities by providing resources and support to those in need. Through various programs and initiatives, the foundation aims to foster a sense of belonging, empower individuals, and create a positive impact on society. Whether it's offering educational opportunities, healthcare assistance, or community development projects, the Harmony Hope Foundation strives to create a harmonious and inclusive world for all.
  </p>
  <Link to='/charityExpand'><button className="donate-btn">More Info</button></Link>
</div>

<div className="dash-card">
  <h2 className="dash-card-title">Compassion Cares</h2>
  <p className="dash-card-text">
    Compassion Cares is a charity that focuses on spreading compassion and providing care to vulnerable populations. The organization's mission is to address the physical, emotional, and social needs of individuals and communities facing challenging circumstances. By offering support services, counseling, and outreach programs, Compassion Cares aims to alleviate suffering, restore hope, and promote resilience. With a strong emphasis on empathy and understanding, the charity strives to create a more compassionate and caring society.
  </p>
  <Link to='/charityExpand'><button className="donate-btn">More Info</button></Link>
</div> */}

{/* <div className="cards">
<div className="dash-card">
  <h2 className="dash-card-title">Harmony Hope Foundation</h2>
  <p className="dash-card-text">
    The Harmony Hope Foundation is dedicated to promoting unity and harmony within communities by providing resources and support to those in need. Through various programs and initiatives, the foundation aims to foster a sense of belonging, empower individuals, and create a positive impact on society. Whether it's offering educational opportunities, healthcare assistance, or community development projects, the Harmony Hope Foundation strives to create a harmonious and inclusive world for all.
  </p>
  <Link to='/charityExpand'><button className="donate-btn">More Info</button></Link>
</div> */}