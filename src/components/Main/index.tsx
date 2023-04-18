import React from 'react';
import Image from 'next/image';

import Stats from './Stats';

import { images } from '../../../public';
import { Button } from '../ui/Button';

const Main: React.FC = () => {
	const { Advertising } = images;

	return (
		<main className="flex justify-center items-start pl-40 pr-20 pt-16 pb-24">
			<div>
				<p className="text-blue leading-[32px] text-lg">
					Earn crypto with A-ADS
				</p>
				<h1 className="text-black text-5xl font-bold leading-[60px] max-w-2xl my-2">
					The first crypto advertising network in the market{' '}
				</h1>
				<p className="font-inter mb-6">
					Do you have your own website, blog, or online media?
					<br /> Become our partner and start earning on advertising right now!
				</p>
				<Stats />
				<Button title="Start Now" />
			</div>
			<div>
				<Image
					src={Advertising}
					alt="Crypto Advertising"
					width={516}
					height={318}
					draggable={false}
				/>
			</div>
		</main>
	);
};

export default Main;
