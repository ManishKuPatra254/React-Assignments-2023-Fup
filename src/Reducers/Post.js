export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";

const initialState = [];

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload);
        case UPDATE_POST:
            return state.map((post) =>
                post.id === action.payload.postId ? action.payload.updatedPost : post)
        default:
            return state;
    }
}

export default postReducer;