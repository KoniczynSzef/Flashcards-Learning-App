import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categoryReducers';

export const store = configureStore({
	reducer: {
		category: categoryReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
