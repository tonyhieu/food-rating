import '../App.css';
import React, { useState } from 'react';
import CommentSubmitter from './CommentSubmitter.js'


function DiningPage(props) {
    const commentCheck = (e) => {
        console.log(e.target.id);
        let card = document.getElementsByClassName('dining-comments');
        if (card[e.target.id[e.target.id.length - 1]].style.display == 'inline') {
            card[e.target.id[e.target.id.length - 1]].style.display = 'none';
        }
        else {
            card[e.target.id[e.target.id.length - 1]].style.display = 'inline';
        }

    }

    const leaveCheck = (e) => {
        let card = document.getElementsByClassName('comment-card');
        console.log(e.target.id);
        if (card[e.target.id[e.target.id.length - 1]].style.display == 'inline') {
            card[e.target.id[e.target.id.length - 1]].style.display = 'none';
        }
        else {
            card[e.target.id[e.target.id.length - 1]].style.display = 'inline';
        }
    }




    const jsonData = {
        "schoolName": "UCLA",
        "diningHalls": [
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "De Neve",
                "averageRating": 4.3,
                "imageUrl": "https://conferences.ucla.edu/wp-content/uploads/2019/01/De-Neve-Plaza_JH.jpg",
                "comments": [
                    "the food is okay",
                    "i liked the breakfast"
                ]
            },
            {
                "name": "Epicurious",
                "averageRating": 4.6,
                "imageUrl": "https://portal.housing.ucla.edu/sites/default/files/media/images/Epicuria%20at%20Covel4_square.png",
                "comments": [
                    "the food was good today",
                    "pizza was really good"
                ]
            }
        ]
    }



    const { schoolName, diningHalls } = jsonData;
    const cards = [];

    for (let i = 0; i < diningHalls.length; i++) {
        const hall = diningHalls[i];
        const comments = [];

        for (let j = 0; j < hall.comments.length; j++) {
            comments.push(<p className="comments" >{hall.comments[j]}</p>);
        }

        cards.push(
            <div className="dining-hall-card">
                <img src={hall.imageUrl} alt="Hall Image" />
                <h2>{hall.name}</h2>
                <p className="dining-rating">Average rating: {hall.averageRating}</p>
                <div className="dining-user-options">
                    <div className="comment" onClick={commentCheck} id={"comments" + i}>Comments</div>
                    <div className="leave-comment" onClick={leaveCheck} id={"leave-comments" + i}>Leave a comment</div>
                </div>
                <div className="dining-comments">
                    {comments}
                </div>
                <CommentSubmitter />
            </div>
        );
    }

    return (
        <div className="dining-page">
            <h1 className="dining-title">Dining Halls at {schoolName}</h1>
            <div className="dining-cards">
                {cards}
            </div>

        </div>
    );

}


export default DiningPage;








