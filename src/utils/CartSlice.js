import { createSlice } from "@reduxjs/toolkit";

const loadInitialItems = () => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
};

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadInitialItems()
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = { ...action.payload, totalPrice: action.payload.price };
            state.items.push(newItem);
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearItem: (state) => {
            state.items = [];
        },
    }
});

export const { addItem, removeItem, clearItem } = CartSlice.actions;

export default CartSlice.reducer;
