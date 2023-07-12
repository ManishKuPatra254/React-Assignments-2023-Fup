export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        case DELETE_USER:
            return state.filter((user) => user.id !== action.payload);
        case UPDATE_USER:
            return state.map((user) =>
                user.id === action.payload.userId ? action.payload.updateUser : user)
        default:
            return state;
    }
}
export default userReducer;