'use client';

import { useAppDispatch, useAppSelector } from '@/context/hooks';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { handleReset } from '@/helpers/reset';

function Summary() {
	const { mistakes, hints } = useAppSelector((state) => state.stats);
	const dispatch = useAppDispatch();

	return (
		<Card className="outline outline-slate-700 outline-offset-4">
			<CardHeader>
				<CardTitle>Congratulations on finishing!</CardTitle>
				<CardDescription className="text-base text-slate-800">
					Here are your stats:{' '}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="list-disc ml-6 flex flex-col gap-2">
					<li className={`${mistakes === 0 ? 'text-xl font-bold' : 'text-xl'}`}>
						{mistakes >= 1 ? `Mistakes: ${mistakes}` : `No mistakes. Well done!`}
					</li>
					<li className={`${hints === 0 ? 'text-xl font-bold' : 'text-xl'}`}>
						{hints >= 1 ? `Hints taken: ${hints}` : `No hints taken. Well done!`}
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<Button
					className="ml-auto bg-purple-800 hover:bg-purple-700 transition-all"
					onClick={() => handleReset(dispatch, false)}>
					Practice again
				</Button>
			</CardFooter>
		</Card>
	);
}

export default Summary;
