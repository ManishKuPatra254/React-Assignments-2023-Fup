import React from 'react';
import UserList from '../Main/FormUser';
import UserForm from '../Main/FormUserList';

const UserContainer = () => {
    return (
        <div>
            <UserForm />
            <UserList />
        </div>
    )
}

export default UserContainer;