import { Category, setCategory } from '@/context/reducers/categoryReducers';
import { FlashcardProps, setCurrentFlashcard } from '@/context/reducers/flashcardReducers';
import { setStats, statsProps } from '@/context/reducers/statsReducers';
import { WordList, setWords } from '@/context/reducers/wordsReducers';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const handleReset = (
	dispatch: ThunkDispatch<
		{
			category: Category;
			words: WordList;
			flashcard: FlashcardProps;
			stats: statsProps;
		},
		undefined,
		AnyAction
	>,
	resetCategory: boolean,
	words: [] | { english: string; polish: string }[],
) => {
	if (resetCategory) {
		dispatch(
			setCategory({
				name: 'unknown',
			}),
		);
	}

	dispatch(
		setWords({
			words: words,
		}),
	);

	dispatch(
		setStats({
			hints: 0,
			mistakes: 0,
		}),
	);

	dispatch(
		setCurrentFlashcard({
			index: 0,
		}),
	);
};
