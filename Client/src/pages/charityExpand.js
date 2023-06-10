import React from 'react';
import { Link } from 'react-router-dom';


export default function Donate() {

    return (

        <div class="card">
            <div class="content">
                <p class="heading">Charity Name</p>
                <p class="para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                    laboriosam at voluptas minus culpa deserunt delectus sapiente
                    nventore pariatur
                </p>
                <Link to='/donate'><button className="btn-donate">
                    Donate now
                </button></Link>
            </div>
        </div>
    )
}