"use client"

import React from 'react';

interface FlashcardProps {
	word: {
		english: string;
		polish: string;
	};
}

function Flashcard({ word }: FlashcardProps) {
	return <div>{word.polish}</div>;
}

export default Flashcard;
