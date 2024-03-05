
// this is the page where we create a Redux Store through  which we can add the reducer(or we can say the properties that are are require to build an app from the Slice section).

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'

export const store=configureStore({
    reducer:todoReducer
}) 