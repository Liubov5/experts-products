import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import messageSlice from "./users/messageSlice";
import authSlice from "./users/authSlice";


export const store = configureStore({
    reducer: {
        products: productsSlice,
        message: messageSlice,
        auth:authSlice,
    },
    devTools:true
})