import '../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CommentSubmitter from './CommentSubmitter.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'





function DiningPage() {
    const state = useLocation();
    const [hall, setHall] = useState([]);
    const college = state.state.college;

    const url = "https://us-central1-foodreviewdatabase-e8095.cloudfunctions.net/app/api/getHalls/" + college;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        fetch(url, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(data => setHall(data.data))
    })

    const diningHalls = hall;
    const cards = []

    for (let i = 0; i < diningHalls.length; i++) {
        const hall = diningHalls[i];
        const comments = [];

        for (let j = 0; j < hall.comments.length; j++) {
            comments.push(<p className="comments" >{hall.comments[j]}</p>);
        }

        let index_data = {
            college: college,
            index: i
        }

        cards.push(
            <div className="dining-hall-card">
                <img src={hall.imageUrl} alt={"Image of " + hall.name} />
                <h2>{hall.name}</h2>
                <p className="dining-rating">Average rating: {hall.averageRating}</p>
                <div className="dining-user-options">
                    <div className="comment" onClick={commentCheck} id={"comments" + i}>Comments</div>
                    <div className="leave-comment" onClick={leaveCheck} id={"leave-comments" + i}>Leave a comment</div>
                </div>
                <div className="dining-comments">
                    {comments}
                </div>
                <CommentSubmitter {...index_data} />
            </div>
        );
    }


    const navigate = useNavigate();

    const commentCheck = (e) => {
        console.log('running this')
        let card = document.getElementsByClassName('dining-comments');
        if (card[e.target.id[e.target.id.length - 1]].style.display == 'inline') {
            card[e.target.id[e.target.id.length - 1]].style.display = 'none';
        }
        else {
            card[e.target.id[e.target.id.length - 1]].style.display = 'inline';
        }

    }

    const leaveCheck = (e) => {
        console.log('running this')
        let card = document.getElementsByClassName('comment-card');
        if (card[e.target.id[e.target.id.length - 1]].style.display == 'inline') {
            card[e.target.id[e.target.id.length - 1]].style.display = 'none';
        }
        else {
            card[e.target.id[e.target.id.length - 1]].style.display = 'inline';
        }
    }

    return (
        <div className="dining-page">
            <FontAwesomeIcon id="left-arrow" icon={faArrowLeft} onClick={() => navigate('/')} />
            <h1 className="dining-title">Dining Halls at {college}</h1>
            <div className="dining-cards">
                {cards}
            </div>

        </div>
    );

}


export default DiningPage;








