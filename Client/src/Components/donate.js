import React from 'react';
import { Link } from 'react-router-dom';


export default function Donate() {

    return (
        <div className="card-section">
            <div className="card">
                <div className="content">
                    <p className="heading">Harmony Hope Foundation</p>
                    <p className="para">
                        The Harmony Hope Foundation is dedicated to promoting unity and harmony within communities by providing resources and support to those in need. Through various programs and initiatives, the foundation aims to foster a sense of belonging, empower individuals, and create a positive impact on society. Whether it's offering educational opportunities, healthcare assistance, or community development projects, the Harmony Hope Foundation strives to create a harmonious and inclusive world for all.
                    </p>
                    <Link to='https://donate.stripe.com/test_eVa7ug0l22en6Y08ww'><button className="donate-btn">
                        Donate now
                    </button></Link>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <p className="heading">Compassion Cares</p>
                    <p className="para">
                        Compassion Cares is a charity that focuses on spreading compassion and providing care to vulnerable populations. The organization's mission is to address the physical, emotional, and social needs of individuals and communities facing challenging circumstances. By offering support services, counseling, and outreach programs, Compassion Cares aims to alleviate suffering, restore hope, and promote resilience. With a strong emphasis on empathy and understanding, the charity strives to create a more compassionate and caring society.
                    </p>
                    <Link to='https://donate.stripe.com/test_eVa7ug0l22en6Y08ww'><button className="donate-btn">
                        Donate now
                    </button></Link>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <p className="heading">Bright Futures Initiative</p>
                    <p className="para">
                        The Bright Futures Initiative is dedicated to empowering underprivileged youth and providing them with opportunities for a brighter future. Through educational programs, mentorship, and skills development initiatives, the charity aims to break the cycle of poverty and create pathways for success. By equipping young individuals with the necessary tools and resources, the Bright Futures Initiative strives to unlock their potential, foster personal growth, and inspire them to become agents of positive change in their communities.
                    </p>
                    <Link to='https://donate.stripe.com/test_eVa7ug0l22en6Y08ww'><button className="donate-btn">
                        Donate now
                    </button></Link>
                </div>
            </div>
        </div>
    )
}
