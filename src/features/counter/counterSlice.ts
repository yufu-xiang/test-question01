import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface ICounterState {
	count: number
	isDisabled: boolean
}

const initialState: ICounterState = {
	count: 0,
	isDisabled: false,
}
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		add: state => {
			state.count += 1
		},
		clear: state => {
			state.count = 0
		},
		disable: state => {
			state.isDisabled = true
		},
		enable: state => {
			state.isDisabled = false
		},
	},
})
export const selectCount = (state: RootState) => state.counter.count
export const selectIsDisabled = (state: RootState) => state.counter.isDisabled
export const { add, clear, disable, enable } = counterSlice.actions
export default counterSlice.reducer
