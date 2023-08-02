'use client';

import React from 'react';
import Link from 'next/link';

import { useAppDispatch } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';
import { setWords } from '@/context/reducers/wordsReducers';
import { setStats } from '@/context/reducers/statsReducers';

function Header() {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(
			setCategory({
				name: 'unknown',
			}),
		);

		dispatch(
			setWords({
				words: [],
			}),
		);

		dispatch(
			setStats({
				hints: 0,
				mistakes: 0,
			}),
		);
	};
	return (
		<header className="text-slate-100 px-4 py-3 bg-slate-900 flex sticky top-0">
			<Link href={'/'} onClick={handleClick}>
				<h1 className="text-3xl font-bold hover:text-white transition">Flashcards</h1>
			</Link>
		</header>
	);
}

export default Header;
