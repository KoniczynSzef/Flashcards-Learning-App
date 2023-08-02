import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import ReduxProvider from '@/context/ReduxProvider';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'Flashcards - Learning',
	description: 'Flashcards is an open application for learning english words',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen bg-slate-950`}>
				<ReduxProvider>
					<Header />
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
