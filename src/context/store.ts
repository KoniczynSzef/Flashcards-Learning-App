import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categoryReducers';
import { wordsReducer } from './reducers/wordsReducers';

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		words: wordsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
