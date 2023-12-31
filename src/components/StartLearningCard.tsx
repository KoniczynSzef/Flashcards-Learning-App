'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';
import { setWords } from '@/context/reducers/wordsReducers';
import { wordsB1, wordsB2, wordsC1 } from '@/assets/words';
import { randomizeWords } from '@/helpers/randomizeWords';

function StartLearningCard({
	setStartLearning,
}: {
	setStartLearning: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { category } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const handleReset = () => {
		dispatch(
			setCategory({
				name: 'unknown',
			}),
		);
	};

	const handleSubmit = () => {
		if (category.name === 'B1') {
			dispatch(
				setWords({
					words: randomizeWords(wordsB1),
				}),
			);
		} else if (category.name === 'B2') {
			dispatch(
				setWords({
					words: randomizeWords(wordsB2),
				}),
			);
		} else {
			dispatch(
				setWords({
					words: randomizeWords(wordsC1),
				}),
			);
		}
		setStartLearning(true);
	};

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Card className="max-w-sm border-slate-700 bg-gray-900 text-white">
				<CardHeader>
					<CardTitle>You&#39;ve chosen {category.name} level</CardTitle>
					<CardDescription className="text-slate-200 text-lg">
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
					<Button
						onClick={handleReset}
						className="bg-zinc-200 text-black hover:bg-white transition duration-300 font-medium">
						Go Back
					</Button>
					<Button
						className="bg-purple-900 hover:bg-purple-800 transition"
						onClick={handleSubmit}>
						Start learning
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

export default StartLearningCard;
