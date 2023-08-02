'use client';
import React from 'react';

import { Card, CardTitle, CardHeader, CardDescription, CardFooter, CardContent } from './ui/card';

import { useAppDispatch } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';
import { LevelProps } from '@/types/levelProps';

function Level({ name, exampleWords, idx }: LevelProps) {
	const dispatch = useAppDispatch();

	const handleChoose = () => {
		dispatch(
			setCategory({
				name: name,
			}),
		);
	};
	return (
		<Card
			className={`h-64 w-72 border-2 bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-md shadow-slate-800 hover:from-slate-900 hover:to-slate-700 hover:scale-105 transition-all duration-300`}>
			<button className="text-left" onClick={handleChoose}>
				<CardHeader className="relative">
					<CardTitle>
						<span>Level: {name}</span>
					</CardTitle>
					<CardDescription className="text-white text-xl">
						Illustrative words:
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
