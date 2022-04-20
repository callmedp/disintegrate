import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homepage/slice'

export const store = configureStore({
  reducer: {
      home: homeReducer
  },
})