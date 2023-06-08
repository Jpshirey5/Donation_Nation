import React from "react";
import Footer from "../Components/footer";

export default function Dashboard() {

  return (
   
        <div>
        <div className="dashboard">
          <h1 className="dash-title">Dashboard</h1>

          <div className="dash-container">
            <div className="column">
              <section className="donated-column">
                <div className="donated-title">Previously Donated</div>
                <div className="donated-history"></div>
              </section>
            </div>

            <div className="cards">
              <div className="dash-card">
                <h2 className="dash-card-title">Harmony Hope Foundation</h2>
                <p className="dash-card-text">
                  The Harmony Hope Foundation is dedicated to promoting unity and harmony within communities by providing resources and support to those in need. Through various programs and initiatives, the foundation aims to foster a sense of belonging, empower individuals, and create a positive impact on society. Whether it's offering educational opportunities, healthcare assistance, or community development projects, the Harmony Hope Foundation strives to create a harmonious and inclusive world for all.
                </p>
                <button className="donate-btn">More Info</button>
              </div>

              <div className="dash-card">
                <h2 className="dash-card-title">Compassion Cares</h2>
                <p className="dash-card-text">
                  Compassion Cares is a charity that focuses on spreading compassion and providing care to vulnerable populations. The organization's mission is to address the physical, emotional, and social needs of individuals and communities facing challenging circumstances. By offering support services, counseling, and outreach programs, Compassion Cares aims to alleviate suffering, restore hope, and promote resilience. With a strong emphasis on empathy and understanding, the charity strives to create a more compassionate and caring society.
                </p>
                <button className="donate-btn">More Info</button>
              </div>

              <div className="dash-card">
                <h2 className="dash-card-title">Bright Futures Initiative</h2>
                <p className="dash-card-text">
                  The Bright Futures Initiative is dedicated to empowering underprivileged youth and providing them with opportunities for a brighter future. Through educational programs, mentorship, and skills development initiatives, the charity aims to break the cycle of poverty and create pathways for success. By equipping young individuals with the necessary tools and resources, the Bright Futures Initiative strives to unlock their potential, foster personal growth, and inspire them to become agents of positive change in their communities.
                </p>
                <div className="btns">
                <button className="donate-btn">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Footer />
        </div>
      )}
