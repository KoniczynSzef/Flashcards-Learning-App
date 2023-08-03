'use client';

import { useAppDispatch, useAppSelector } from '@/context/hooks';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { handleReset } from '@/helpers/reset';
import { motion } from 'framer-motion';

function Summary() {
	const { mistakes, hints } = useAppSelector((state) => state.stats);
	const { words } = useAppSelector((state) => state.words);
	const dispatch = useAppDispatch();

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Card className="border border-slate-800 bg-slate-900 text-white">
				<CardHeader>
					<CardTitle>Congratulations on finishing!</CardTitle>
					<CardDescription className="text-base text-slate-300">
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
						onClick={() => handleReset(dispatch, false, words)}>
						Practice again
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

export default Summary;
