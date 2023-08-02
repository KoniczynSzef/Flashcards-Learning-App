import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordList {
	words: { polish: string; english: string }[];
}

const initialState: WordList = { words: [] };

const wordsSlice = createSlice({
	initialState: initialState,
	name: 'words',
	reducers: {
		setWords: (state, action: PayloadAction<WordList>) => {
			state.words = action.payload.words;
		},
	},
});

export const { setWords } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
