import React, { useState } from 'react';
import '../App.css';

function CommentSubmitter(props) {
    const [value, changeValue] = useState(1)
    const [comment, setComment] = useState('')
    const handleChange = ((event) => {
        const url = "https://us-central1-foodreviewdatabase-e8095.cloudfunctions.net/app/api/create/" + props.college + "/" + props.index;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "comment": comment,
            "rating": parseInt(value)
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() => {
                window.location.reload(false);
            })
            .catch(error => console.log('error', error));

        event.preventDefault();
    });

    return (
        <div className="comment-card">
            <form className="comment-form" onSubmit={handleChange}>
                <div class="slidecontainer">
                    <label for="myRange">Rating:</label>
                    <input type="range" min="1" max="5" value={value} onChange={e => changeValue(e.target.value)} id="myRange" />
                </div>
                <label for="comment" >Comment:</label>
                <input type="text" id="comment-text" name="comment" value={comment} onChange={e => setComment(e.target.value)} />
                <input id="submit" type="submit" />
            </form>
        </div>
    );
}


export default CommentSubmitter








