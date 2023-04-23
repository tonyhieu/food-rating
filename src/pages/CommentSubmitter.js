import React, { useState } from 'react';
import '../App.css';

function CommentSubmitter(props) {
    const [value, changeValue] = useState(1)
    const [comment, setComment] = useState('')
    const handleChange = (() => {
        const url = "https://us-central1-foodreviewdatabase-e8095.cloudfunctions.net/app/api/getHalls/create" + props.college + "/" + props.index;
        let data_value = {
            "rating": value,
            "comment": comment

        }
        var requestOptions = {
            method: 'POST',
            body: data_value,
            redirect: 'follow'
        };
        fetch(url, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data))
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








