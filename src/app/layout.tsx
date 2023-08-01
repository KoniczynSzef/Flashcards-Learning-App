import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import ReduxProvider from '@/context/ReduxProvider';

export const metadata: Metadata = {
	title: 'Flashcards - Learning',
	description: 'Flashcards is an open application for learning english words',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
