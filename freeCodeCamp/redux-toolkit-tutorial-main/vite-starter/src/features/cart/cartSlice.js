import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",

    //!Using axios
    async () => {
        try {
            const response = await axios.get(url);

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }

        //!Using async
        // async () => {
        //     try {
        //         const response = await fetch(url);
        //         const data = response.json();
        //         return data;
        //     } catch (error) {
        //         console.error(error);
        //         throw error;
        //     }

        //!Using Fetch
        // return fetch(url)
        //     .then((response) => {
        //         const data = response.json();
        //         console.log(data);
        //         return data;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        // });
    }
);

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },

        increase: (state, { payload }) => {
            console.log(payload.id);
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount + 1;
        },

        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount - 1;
        },

        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += parseFloat(item.price) * item.amount;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            });
    },
    // {
    // [getCartItems.pending]: (state) => {
    //     state.isLoading = true;
    // },
    // [getCartItems.fulfilled]: (state, action) => {
    //     console.log(action);
    //     state.isLoading = false;
    //     state.cartItems = action.payload;
    // },
    // [getCartItems.rejected]: (state) => {
    //     state.isLoading = false;
    // },
    // },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
    cartSlice.actions;

export default cartSlice.reducer;
