import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CertificateProps {
	title: string;
	date: string;
	link: string;
}

export default function Certificate({ title, date, link }: CertificateProps) {
	return (
		<Card className='overflow-hidden justify-between flex flex-col h-full'>
			<CardContent className='p-4'>
				<h3 className='font-semibold text-xl mb-2'>{title}</h3>
				<p className='text-sm text-muted-foreground mb-4'>{date}</p>
			</CardContent>
			<CardFooter className='p-4 pt-0'>
				<Link
					href={link}
					target='_blank'
					className='inline-flex items-center gap-2 text-sm hover:underline'>
					View Certificate
				</Link>
			</CardFooter>
		</Card>
	);
}
