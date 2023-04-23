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
            .catch(error => console.log('error', error));
        // let data_value = {
        //     "rating": value,
        //     "comment": comment
        // }
        // var requestOptions = {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin", // include, *same-origin, omit
        //     redirect: "follow", // manual, *follow, error
        //     referrerPolicy: "no-referrer",
        //     body: JSON.stringify(data_value)
        // };
        // console.log(data_value)
        // fetch(url, requestOptions)
        //     .then(response => {
        //         console.log(response.json())
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
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








