'use client';

import React, { useState } from 'react';

import { useAppSelector } from '@/context/hooks';
import StartLearningCard from './StartLearningCard';
import Flashcard from './Flashcard';

function Flashcards() {
	const [startLearning, setStartLearning] = useState(false);

	const { words } = useAppSelector((state) => state);

	return (
		<div className="text-white">
			{!startLearning ? (
				<StartLearningCard setStartLearning={setStartLearning} />
			) : (
				<div>
					<p>Person started learning</p>
					{words.words.map((word, i) => (
						<div key={i}>
							<Flashcard word={word} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Flashcards;
