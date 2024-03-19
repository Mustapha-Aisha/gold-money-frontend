import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Store/features/auth'

export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})