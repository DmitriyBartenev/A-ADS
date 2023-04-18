import Head from 'next/head';
import Header from '@/components/Header';
import Main from '@/components/Main';
import MonetizationOptions from '@/components/Sections/MonetizationOptions';

export default function Home() {
	return (
		<>
			<Head>
				<title>A-ADS</title>
				<meta name="description" content="A-ADS Application" />
				<meta name="keywords" content="Next.js, React, TypeScript" />
			</Head>
			<div className="bg-main-section bg-right bg-no-repeat">
				<Header />
				<Main />
			</div>
			<MonetizationOptions />
		</>
	);
}
