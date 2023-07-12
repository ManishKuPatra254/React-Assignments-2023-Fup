import { ADD_USER,DELETE_USER,UPDATE_USER } from "../Reducers/Users";

export const addUser = (user) => {
    return{
        type:ADD_USER,
        payload:user,
    }
}

export const deleteUser = (userId) => {
    return{
        type: DELETE_USER,
        payload: userId,
    }
}

export const updateUser = (userId, updatedUser) => {
    return{
        type:UPDATE_USER,
        payload: {
            userId,updatedUser,
        }
    }
}