'use client';

import Level, { LevelProps } from '@/components/Level';
import { useAppSelector } from '@/context/hooks';
import Image from 'next/image';

const levels: LevelProps[] = [
	{ name: 'B1', exampleWords: ['environment', 'diversity', 'imagination'] },
	{ name: 'B2', exampleWords: ['intuition', 'harmony', 'trust'] },
	{ name: 'C1', exampleWords: ['coherence', 'stunning', 'extravagant'] },
];

export default function Home() {
	const category = useAppSelector((state) => state.category);
	return (
		<main className="flex items-center justify-center min-h-screen">
			{category.name !== 'unknown' ? (
				category.name
			) : (
				<div className="flex gap-12">
					{levels.map((level, i) => (
						<Level key={i} name={level.name} exampleWords={level.exampleWords} />
					))}
				</div>
			)}
		</main>
	);
}
