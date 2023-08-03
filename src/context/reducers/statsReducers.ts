import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface statsProps {
	mistakes: number;
	hints: number;
}

const initialState: statsProps = { mistakes: 0, hints: 0 };

const statsSlice = createSlice({
	initialState: initialState,
	name: 'stats',
	reducers: {
		setStats: (state, action: PayloadAction<statsProps>) => {
			state.mistakes = action.payload.mistakes;
			state.hints = action.payload.hints;
		},
	},
});

export const { setStats } = statsSlice.actions;
export const statsReducer = statsSlice.reducer;
