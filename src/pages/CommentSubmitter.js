import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CommentSubmitter() {
    const navigate = useNavigate();
    const [value, changeValue] = useState(1)

    return (
        <div className="comment-card">
            <form className="comment-form">
                <div class="slidecontainer">
                    <label for="myRange">Rating:</label>
                    <input type="range" min="1" max="5" value={value} onChange={e => changeValue(e.target.value)} id="myRange" />
                </div>
                <label for="comment" >Comment:</label>
                <input type="text" id="comment-text" name="comment" />
                <input id="submit" type="submit" />
            </form>
        </div>
    );
}


export default CommentSubmitter








