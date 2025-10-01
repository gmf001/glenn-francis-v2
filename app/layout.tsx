import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// @ts-ignore
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GlennFrancis.dev - Full Stack Developer',
	description: 'Full stack developer portfolio showcasing projects and skills'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn('min-h-screen dark font-sans', inter.className)}>
				{children}
			</body>
		</html>
	);
}
