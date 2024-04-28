import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import issuedBooks from "./issuedBooks";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        issued: issuedBooks
    }
})

export default store