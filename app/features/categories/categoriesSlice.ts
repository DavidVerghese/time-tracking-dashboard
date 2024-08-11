import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import tasksData from '../../data.json'
import { CategoryState } from '../../../types'
// export interface CategoryState {
// 	title: string;
// 	timeframes: {
// 		daily: {
// 			current: number;
// 			previous: number;
// 		};
// 		weekly: {
// 			current: number;
// 			previous: number;
// 		};
// 		monthly: {
// 			current: number;
// 			previous: number;
// 		};
// 	};
// 	color?: string;
// 	icon?: string;
// }

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
	// setTitle: (state, action: PayloadAction<string>) => {
	// 	state.title = action.payload
	// },
	// setColor: (state, action: PayloadAction<string>) => {
	// 	state.color = action.payload
	// },
	// setImage: (state, action: PayloadAction<string>) => {
	// 	state.image = action.payload
	// },
	// setDaily: (state, action: PayloadAction<{current?: number; previous?: number}>) => {
	// 	if (action.payload.current !== undefined) {
	// 		state.timeframes.monthly.current = action.payload.current;
	// 	}
	// 	if (action.payload.previous !== undefined) {
	// 		state.timeframes.daily.previous = action.payload.previous;
	// 	}
	// },
	// setWeekly: (state, action: PayloadAction<{current?: number; previous?: number}>) => {
	// 	if (action.payload.current !== undefined) {
	// 		state.timeframes.weekly.current = action.payload.current;
	// 	}
	// 	if (action.payload.previous !== undefined) {
	// 		state.timeframes.weekly.previous = action.payload.previous;
	// 	}
	// },
	// setMonthly: (state, action: PayloadAction<{current?: number; previous?: number}>) => {
	// 	if (action.payload.current !== undefined) {
	// 		state.timeframes.monthly.current = action.payload.current;
	// 	}
	// 	if (action.payload.previous !== undefined) {
	// 		state.timeframes.monthly.previous = action.payload.previous;
	// 	}
	// }
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, addCategories } = categoriesSlice.actions

export default categoriesSlice.reducer