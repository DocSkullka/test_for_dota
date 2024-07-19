import {configureStore} from '@reduxjs/toolkit'
import squareReducer from './slices/squareSlice'



export default configureStore ({
    reducer: {
        square: squareReducer
    },
});