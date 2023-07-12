import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../Actions/Users';
import styles from './FormStyle.module.css';

const UserForm = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            email,
        };
        addUser(newUser);
        setName("")
        setEmail("")
    }
    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit} className={styles.user_container}>

                <input type='text' placeholder='Name' value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input type='email' placeholder='Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default connect(null, { addUser })(UserForm);
