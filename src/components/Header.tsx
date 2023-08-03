'use client';

import React from 'react';
import Link from 'next/link';

import { useAppDispatch } from '@/context/hooks';
import { handleReset } from '@/helpers/reset';

function Header() {
	const dispatch = useAppDispatch();

	return (
		<header className="text-slate-100 px-4 py-3 bg-slate-900 flex sticky top-0">
			<Link href={'/'} onClick={() => handleReset(dispatch, true)}>
				<h1 className="text-3xl font-bold hover:text-white transition">Flashcards</h1>
			</Link>
		</header>
	);
}

export default Header;
