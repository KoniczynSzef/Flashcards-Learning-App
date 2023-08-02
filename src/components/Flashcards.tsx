'use client';

import React, { useState } from 'react';

import { useAppSelector } from '@/context/hooks';
import StartLearningCard from './StartLearningCard';
import Flashcard from './Flashcard';

function Flashcards() {
	const [startLearning, setStartLearning] = useState(false);

	const { words, flashcard } = useAppSelector((state) => state);

	return (
		<div className="text-white">
			{!startLearning ? (
				<StartLearningCard setStartLearning={setStartLearning} />
			) : (
				<div>
					{words.words.map(
						(word, idx) =>
							idx === flashcard.index && (
								<div key={idx} className="flex gap-1 my-1">
									<Flashcard word={word} idx={idx} />
								</div>
							),
					)}
				</div>
			)}
		</div>
	);
}

export default Flashcards;
