import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlashcardProps {
	index: number;
}

const initialState: FlashcardProps = { index: 0 };

const flashcardSlice = createSlice({
	initialState: initialState,
	name: 'flashcards',
	reducers: {
		setCurrentFlashcard: (state, action: PayloadAction<FlashcardProps>) => {
			state.index = action.payload.index;
		},
	},
});

export const { setCurrentFlashcard } = flashcardSlice.actions;
export const flashcardReducer = flashcardSlice.reducer;
