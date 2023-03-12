import { createSlice } from '@reduxjs/toolkit';

createSlice({
    name: 'cart',
    initialState: {
        itmes: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            
        },
        removeItemFromCart() {},
    }
})