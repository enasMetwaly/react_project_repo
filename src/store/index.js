import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from './slices/watchListSlice';
import language from './slices/language';
import theme from './slices/theme';

// import language from './slices/language';
// import theme from './slices/themeSlice';


export default configureStore({
    reducer: {
        language,
        theme,

        watchList: watchListReducer, // Add your slice reducer here.

        
    }
})

// ACTION REDUCER STORE