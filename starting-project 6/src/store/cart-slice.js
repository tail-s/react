import { createSlice } from '@reduxjs/toolkit';

createSlice({
    name: 'cart',
    initialState: {
        itmes: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itmes.find(itme => item.id === newItem.id);
            if (!existingItem) {
                state.itmes.push({
                    itemId: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.total + newItem.price;
            }

            }
            
        },
        removeItemFromCart() {},
    }
})