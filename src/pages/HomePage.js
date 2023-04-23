import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiningPage from './DiningPage.js'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const navigate = useNavigate();

    const [college, setCollege] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/dining',
            {
                state: {
                    college: college
                }
            })
    };

    return (
        <div className="home">
            <h1 className="home-header">Chow Checker</h1>
            <form className="chow-form" onSubmit={handleSubmit}>
                <input type="text" onChange={event => setCollege(event.target.value)} name="message" id="input-message" placeholder="Type a school name here..." />
                <button type="submit" id="magnifying-glass">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </form>
        </div>
    );

}


export default Home








