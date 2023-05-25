
import { configureStore } from '@reduxjs/toolkit';
import Update from './Update';

export const StoreData = configureStore({
    reducer: {
        todo: Update,

    },
});
