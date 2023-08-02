'use client';

import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/context/hooks';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { setCurrentFlashcard } from '@/context/reducers/flashcardReducers';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { setStats } from '@/context/reducers/statsReducers';

interface FlashcardProps {
	word: {
		english: string;
		polish: string;
	};
	idx: number;
}

function Flashcard({ word, idx }: FlashcardProps) {
	const [mistake, setMistake] = useState(false);
	const [hint, setHint] = useState(false);

	const [input, setInput] = useState('');

	const dispatch = useAppDispatch();
	const { words } = useAppSelector((state) => state);
	const { index } = useAppSelector((state) => state.flashcard);
	const { hints, mistakes } = useAppSelector((state) => state.stats);

	const handleHint = () => {
		if (!hint) {
			dispatch(
				setStats({
					mistakes: mistakes,
					hints: hints + 1,
				}),
			);

			console.log(hints);
		}

		setHint((prev) => !prev);
	};

	const handleNext = (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		const word = words.words[index];

		if (word.english === input) {
			dispatch(
				setCurrentFlashcard({
					index: index + 1,
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

				<CardContent className="flex flex-col gap-4">
					<Button className="capitalize text-xl ml-auto" onClick={handleHint}>
						🔦
					</Button>
					{mistake && (
						<CardDescription className="text-red-600 text-xl">
							Uuuhh! Try again!
						</CardDescription>
					)}

					<AnimatePresence>
						{hint && (
							<CardDescription key={'hint'} className="text-xl">
								<motion.div
									initial={{ scaleY: 0 }}
									animate={{ scaleY: 1 }}
									exit={{ scaleY: 0 }}
									className="bg-gray-800 text-white origin-top p-4 rounded-md">
									{word.english.slice(0, 3)}...
								</motion.div>
							</CardDescription>
						)}
					</AnimatePresence>
				</CardContent>

				<CardFooter onSubmit={handleNext}>
					<form className="flex my-auto gap-4">
						<Input
							autoFocus
							className="text-lg"
							placeholder="Meaning..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<Button type="submit" className="text-base">
							Check
						</Button>
					</form>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

export default Flashcard;
