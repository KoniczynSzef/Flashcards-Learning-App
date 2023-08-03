'use client';

import React from 'react';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '@/context/hooks';
import { handleReset } from '@/helpers/reset';

function Header() {
	const dispatch = useAppDispatch();
	const { words } = useAppSelector((state) => state.words);

	return (
		<header className="text-slate-100 px-4 py-3 bg-slate-900 flex sticky top-0 border-b border-b-slate-700">
			<Link href={'/'} onClick={() => handleReset(dispatch, true, words)}>
				<h1 className="text-3xl font-bold hover:text-white transition">Flashcards</h1>
			</Link>
		</header>
	);
}

export default Header;
