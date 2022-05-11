import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "wishlist",
  initialState: {
    cartIds : []
  },
  reducers: {
    addToCart(state, action) {
        if(!state.cartIds.includes(action.payload.id)){
            state.cartIds.push(action.payload.id)
        }
    },
    removeFromCart(state,action){
        state.cartIds.splice(state.cartIds.findIndex(id=> id == action.payload.id),1)
    }
  }
})

export const { addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer