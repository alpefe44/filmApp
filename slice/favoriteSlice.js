import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        console.log(state.items)
      } else {
        const tempProduct = { ...action.payload }
        state.items.push(tempProduct)
      }
    },
    deleteFavorite: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1)
      } else {
        console.log("can't remove the item that is not added to favorite !!!")
      }
      state.items = newCart;
    }
  }
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer;