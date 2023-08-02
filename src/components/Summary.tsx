'use client';

import { useAppSelector } from '@/context/hooks';
import React from 'react';

function Summary() {
	const { mistakes, hints } = useAppSelector((state) => state.stats);
	return (
		<div>
			Congratulations! Your stats: mistakes - {mistakes}, hints taken - {hints}
		</div>
	);
}

export default Summary;
