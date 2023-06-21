import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { Button, ButtonGroup } from '@mui/material'
import {
	add,
	clear,
	disable,
	enable,
	selectCount,
	selectIsDisabled,
} from '../../features/counter/counterSlice'

const Counter = () => {
	// 使用redux實現
	const dispatch = useAppDispatch()
	const count = useAppSelector(selectCount)
	const isDisabled = useAppSelector(selectIsDisabled)

	const handleCountAdd = () => {
		dispatch(add())
	}
	const handleCountClear = () => {
		dispatch(clear())
	}
	const handleDisableToggle = () => {
		dispatch(isDisabled ? enable() : disable())
	}

	// 使用react hook實現
	// const [count, setCount] = useState<number>(0)
	// const [isDisabled, setIsDisabled] = useState<boolean>(false)
	// const handleCountAdd = () => {
	// 	setCount(prev => prev + 1)
	// }
	// const handleCountClear = () => {
	// 	setCount(0)
	// }
	//
	// const handleDisableToggle = () => {
	// 	setIsDisabled(prev => !prev)
	// }

	return (
		<div className='App'>
			<ButtonGroup
				orientation='vertical'
				aria-label='vertical outlined button group'
				style={{ marginTop: '30px', width: '100px' }}
			>
				<Button disabled={isDisabled} onClick={handleCountAdd}>
					CLICK:{count}
				</Button>
				<Button onClick={handleCountClear}>CLEAR</Button>
				<Button onClick={handleDisableToggle}>
					{isDisabled ? 'ABLE' : 'DISABLE'}
				</Button>
			</ButtonGroup>
		</div>
	)
}

export default Counter
