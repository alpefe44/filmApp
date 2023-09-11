import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slice/favoriteSlice'

export const store = configureStore({
  reducer: {
    favorite : favoriteReducer
  },
})