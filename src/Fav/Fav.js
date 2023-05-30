import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noofFav: [],
}


const favSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        // creating a function 
        addToFav: (state, action) => {
            // console.log('hello manish' + action.payload);
            const new_data = action.payload;
            // // console.log(new_data)
            const exists = state.noofFav.find(item => item.imdbID === new_data.imdbID)
            if (exists === undefined) {
                state.noofFav.push(action.payload);
            }
            else {
                alert('Already exists in favoutites please try another movie')
            }
        }
    }
})


export const { addToFav } = favSlice.actions;
export default favSlice;