'use client';
import React from 'react';

import { Card, CardTitle, CardHeader, CardDescription, CardFooter, CardContent } from './ui/card';

import { useAppDispatch } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';

export interface LevelProps {
	name: 'unknown' | 'B1' | 'B2' | 'C1';
	exampleWords: [
		'environment' | 'intuition' | 'coherence',
		'diversity' | 'harmony' | 'stunning',
		'imagination' | 'trust' | 'extravagant',
	];
}

function Level({ name, exampleWords }: LevelProps) {
	const dispatch = useAppDispatch();

	const handleChoose = () => {
		dispatch(
			setCategory({
				name: name,
			}),
		);
	};
	return (
		<Card className="border-none bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-md shadow-slate-800 hover:from-slate-900 hover:to-slate-700 transition-all">
			<button className="text-left" onClick={handleChoose}>
				<CardHeader>
					<CardTitle>Level: {name}</CardTitle>
					<CardDescription className="text-white text-xl">
						Examplary words:
					</CardDescription>
				</CardHeader>
				<CardContent className="py-6">
					<ul>
						{exampleWords.map((word, i) => (
							<div key={i} className="flex items-center gap-2">
								<div className="h-2 w-2 bg-slate-300 rounded-full" />
								<p className="text-lg">{word}</p>
							</div>
						))}
					</ul>
				</CardContent>
			</button>
		</Card>
	);
}

export default Level;
