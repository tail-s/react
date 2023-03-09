import { createSlice } from '@reduxjs/toolkit';

createSlice({
    name: 'cart',
    initialState: {
        itmes: [],
        totalQuantity: 0,
        totalAmount: 0,
    }
})