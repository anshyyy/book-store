import { createSlice } from "@reduxjs/toolkit";

const issuedBooks = createSlice({
    name: 'issued',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [state.items, ...action.payload]
        },
        clearCart : (state) => {
            state.items = []
        }
    }
});

export const {addItem, clearCart} = issuedBooks.actions;
export default issuedBooks.reducer;