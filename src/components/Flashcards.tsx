'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

import { useAppSelector, useAppDispatch } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';
import { motion } from 'framer-motion';
import { setWords } from '@/context/reducers/wordsReducers';
import { wordsB1, wordsB2, wordsC1 } from '@/assets/words';

function Flashcards() {
	const [startLearning, setStartLearning] = useState(false);

	const { category, words } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const handleReset = () => {
		dispatch(
			setCategory({
				name: 'unknown',
			}),
		);
	};

	const handleSubmit = () => {
		console.log(category.name);

		if (category.name === 'B1') {
			dispatch(
				setWords({
					words: wordsB1,
				}),
			);
		} else if (category.name === 'B2') {
			dispatch(
				setWords({
					words: wordsB2,
				}),
			);
		} else {
			dispatch(
				setWords({
					words: wordsC1,
				}),
			);
		}
		setStartLearning(true);

		console.log(words);
	};

	return (
		<div className="text-white">
			{!startLearning ? (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<Card className="max-w-sm shadow-md shadow-white">
						<CardHeader>
							<CardTitle>You&#39;ve chosen {category.name} level</CardTitle>
							<CardDescription className="text-slate-800 text-lg">
								Translate 20 polish words to their english meaning
							</CardDescription>
							<CardContent className="pt-4">
								<ul className="list-disc">
									<li>Quickly and effectively learn english</li>
									<li>Learn from mistakes</li>
									<li>Summarize your score</li>
								</ul>
							</CardContent>
						</CardHeader>
						<CardFooter className="flex justify-between">
							<Button onClick={handleReset}>Go back</Button>
							<Button
								className="bg-purple-900 hover:bg-purple-800"
								onClick={handleSubmit}>
								Start learning
							</Button>
						</CardFooter>
					</Card>
				</motion.div>
			) : (
				<div>
					<p>Person started learning</p>
					{words.words.map((word, i) => (
						<p key={i}>{word.polish}</p>
					))}
				</div>
			)}
		</div>
	);
}

export default Flashcards;
