import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import tasksData from '../../data.json'
import { CategoryState } from '../../../types'

const initialState: Array<CategoryState> = [...tasksData]

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
	addCategory: (state, action: PayloadAction<CategoryState>) => {
		state.push(action.payload);
	},
	addCategories: (state, action: PayloadAction<Array<CategoryState>>) => {
		state.push(...action.payload);
	},
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, addCategories } = categoriesSlice.actions

export default categoriesSlice.reducer