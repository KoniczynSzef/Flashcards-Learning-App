'use client';

import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/context/hooks';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { setCurrentFlashcard } from '@/context/reducers/flashcardReducers';
import { Input } from './ui/input';
import { motion } from 'framer-motion';
import { wordsB1, wordsB2, wordsC1 } from '@/assets/words';

interface FlashcardProps {
	word: {
		english: string;
		polish: string;
	};
	idx: number;
}

function Flashcard({ word, idx }: FlashcardProps) {
	const [mistake, setMistake] = useState(false);
	const [guessed, setGuessed] = useState(false);

	const [input, setInput] = useState('');

	const dispatch = useAppDispatch();
	const { category, words } = useAppSelector((state) => state);
	const { index } = useAppSelector((state) => state.flashcard);

	const handleNext = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		const word = words.words[index];

		if (word.english === input) {
			dispatch(
				setCurrentFlashcard({
					index: index !== 19 ? index + 1 : 0,
				}),
			);
		} else {
			setMistake(true);
			setInput('');

			setTimeout(() => {
				setMistake(false);
			}, 1500);
		}
	};

	return (
		<motion.div initial={{ scaleY: 0.75 }} animate={{ scaleY: 1 }}>
			<Card className="shadow-md shadow-white flex flex-col gap-6 pt-4 px-2">
				<CardHeader className="flex justify-between flex-row">
					<CardTitle className="text-3xl self-start">{word.polish}</CardTitle>
					<p className="font-bold">{index + 1} / 20</p>
				</CardHeader>

				{mistake && (
					<CardContent>
						<CardDescription className="text-red-600 text-xl">
							Uuuhh! Try again!
						</CardDescription>
					</CardContent>
				)}

				<CardFooter onSubmit={handleNext}>
					<form className="flex my-auto gap-4">
						<Input
							autoFocus
							className="text-lg"
							placeholder="Meaning..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<Button type="submit" className="text-lg px-6">
							Check
						</Button>
					</form>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

export default Flashcard;
