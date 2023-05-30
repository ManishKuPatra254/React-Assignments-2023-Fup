import { configureStore } from "@reduxjs/toolkit";
import favSlice from './Fav/Fav'


const store = configureStore({
    reducer: {
        favourites: favSlice.reducer,
    }
})

export default store;