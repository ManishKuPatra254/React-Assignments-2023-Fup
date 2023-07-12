import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps)(UserList);