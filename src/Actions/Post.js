import { ADD_POST, DELETE_POST, UPDATE_POST } from "../Reducers/Post";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId,
    }
}

export const updatePost = (postId, updatedPost) => {
    return {
        type: UPDATE_POST,
        payload: {
            postId, updatedPost,
        }
    }
}