'use client';

import React from 'react';
import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '@/context/hooks';
import { setCategory } from '@/context/reducers/categoryReducers';

function Header() {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(
			setCategory({
				name: 'unknown',
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
