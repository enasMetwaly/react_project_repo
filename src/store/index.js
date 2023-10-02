import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from './slices/watchListSlice';
// import language from './slices/language';
// import theme from './slices/themeSlice';


export default configureStore({
    reducer: {
        watchList: watchListReducer, // Add your slice reducer here.

        
    }
})

// ACTION REDUCER STORE