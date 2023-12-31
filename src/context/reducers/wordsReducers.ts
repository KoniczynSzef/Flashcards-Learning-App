import { randomizeWords } from '@/helpers/randomizeWords';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WordList {
	words: { polish: string; english: string }[];
}

const initialState: WordList = { words: [] };

const wordsSlice = createSlice({
	initialState: initialState,
	name: 'words',
	reducers: {
		setWords: (state, action: PayloadAction<WordList>) => {
			state.words = randomizeWords(action.payload.words);
		},
	},
});

export const { setWords } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
