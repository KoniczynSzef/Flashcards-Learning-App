'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/context/hooks';
import Flashcards from './Flashcards';
import { levels } from './../assets/exemplaryWords';
import { motion } from 'framer-motion';
import Level from './Level';

function Wrapper() {
	const category = useAppSelector((state) => state.category);

	return (
		<div>
			{category.name !== 'unknown' ? (
				<Flashcards />
			) : (
				<div className="flex gap-12 items-center">
					{levels.map((level, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1 * i }}>
							<Level name={level.name} exampleWords={level.exampleWords} />
						</motion.div>
					))}
				</div>
			)}
		</div>
	);
}

export default Wrapper;
