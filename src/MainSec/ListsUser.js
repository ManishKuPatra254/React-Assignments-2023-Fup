import React, { useContext } from 'react';
import { UserContext } from './UserCon';
import styles from './ListUser.module.css'

export function ListUsers() {
    const { state, dispatch } = useContext(UserContext);

    const handleDeleteUser = (userId) => {
        dispatch({ type: 'DELETE_USER', payload: userId })
    };

    return (
        <div>
            <h2>List of users added</h2>
            <div className={styles.list_users}>
                <ul>
                    {state.users.map((user) => (
                        <li key={user.id}>
                            <h5>{user.name}</h5>
                            <p>{user.email}</p>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
};

