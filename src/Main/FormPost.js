import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Actions/Post';
import styles from './FormStyle.module.css'

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body,
        }
        addPost(newPost);
        setTitle("")
        setBody("")
    }
    return (
        <div className={styles.post_container}>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit} className={styles.post_form}>
                <input type='text' placeholder='Title' value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <textarea placeholder='Body' value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>

                <button type='submit'>Add</button>
            </form>
        </div >
    )
}

export default connect(null, { addPost })(PostForm);