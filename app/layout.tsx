'use client';
import './globals.css';
import '../utils/registerGsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 1,
		});
	});

	return (
		<html
			className='no-scrollbar'
			lang='en'
		>
			<body className='bg-cyan-50 flex col '>
				<Header />
				<div id='smooth-content'>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
