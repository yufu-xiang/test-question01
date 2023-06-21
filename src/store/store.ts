import { configureStore } from '@reduxjs/toolkit'
import countsReducer from '../features/counter/counterSlice'

export const store = configureStore({
	reducer: {
		counter: countsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
