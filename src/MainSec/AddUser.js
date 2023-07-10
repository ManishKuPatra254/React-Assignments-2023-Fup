import React, { useState, useContext } from 'react';
import { UserContext } from './UserCon';
import styles from './AddUser.module.css';

export function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { dispatch } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name,
            email,
        };

        dispatch({ type: 'ADD_USER', payload: newUser });

        setName('');
        setEmail('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <h2>Add Users</h2>
                <input type='text' placeholder='Enter Name' value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input type='email' placeholder='Enter Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <button type='submit' onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )

};
