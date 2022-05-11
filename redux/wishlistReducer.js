import { createSlice } from "@reduxjs/toolkit"

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistIds : []
  },
  reducers: {
    addToWishList(state, action) {
        if(!state.wishlistIds.includes(action.payload.id)){
          state.wishlistIds.push(action.payload.id)
        }
    },
    removeFromWishList(state,action){
        state.wishlistIds.splice(state.wishlistIds.findIndex(id=> id == action.payload.id),1)
    }
  }
})

export const { addToWishList, removeFromWishList} = wishListSlice.actions
export default wishListSlice.reducer