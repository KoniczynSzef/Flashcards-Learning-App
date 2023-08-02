import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categoryReducers';
import { wordsReducer } from './reducers/wordsReducers';
import { flashcardReducer } from './reducers/flashcardReducers';
import { statsReducer } from './reducers/statsReducers';

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		words: wordsReducer,
		flashcard: flashcardReducer,
		stats: statsReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
