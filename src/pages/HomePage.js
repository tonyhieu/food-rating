import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Home() {
    const navigate = useNavigate();
    const [message, setMessage] = useState();

    return (
        <div className="home">
            <h1 className="home-header">Dining Review</h1>
            <form>
                <input type="text" name="message" id="input-message" placeholder="Type a school name here..." />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </form>
        </div>
    );
}


export default Home








