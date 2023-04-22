import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Home() {
    const navigate = useNavigate();
    const [message, setMessage] = useState();

    return (
        <div className="home">
            <h1 className="home-header">Dining Review</h1>
            <form>
                <input type="text" name="message" id="input-message" placeholder="Type a school name here..." />
            </form>
        </div>
    );
}


export default Home








