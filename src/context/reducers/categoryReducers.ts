import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
	name: 'unknown' | 'B1' | 'B2' | 'C1';
}

const initialState: Category = { name: 'unknown' };

const categorySlice = createSlice({
	initialState: initialState,
	name: 'category',
	reducers: {
		setCategory: (state, action: PayloadAction<Category>) => {
			state.name = action.payload.name;
		},
	},
});

export const { setCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
