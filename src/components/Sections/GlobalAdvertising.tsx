import React from 'react';
import Image from 'next/image';

import { advertisingList } from '@/data/advertisingList';

import { icons } from '../../../public';

const GlobalAdvertising: React.FC = () => {
	const { Arrow } = icons;

	return (
		<div className="px-44 py-28 flex justify-between items-start bg-advertisingBg bg-no-repeat bg-left-bottom">
			<div>
				<h2 className="text-black text-4xl max-w-lg leading-[56px] font-bold">
					A-ADS is global advertising{' '}
					<span className="text-blue">for everyone</span>
				</h2>
				<ul className="list-disc marker:text-blue mt-7 ml-[25px] marker:text-2xl">
					{advertisingList.map((listItem) => (
						<li
							key={listItem.id}
							className="font-inter text-lightGray text-base mb-5"
						>
							{listItem.title}
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col items-center">
				<div className="bg-white shadow-lg shadow-black/10 py-4 px-7 max-w-lg">
					<p className="text-lightGray font-inter text-sm font-medium">
						Your visitors can view stats and buy ads directly on your site. If
						they become advertisers,{' '}
						<span className="text-blue">you will get 50% of our fees</span>{' '}
						collected from them
					</p>
				</div>
				<div className="w-80 h-60 border-lightRed border bg-white relative mt-12">
					<Image
						src={Arrow}
						alt="Arrow image"
						width={13}
						height={39}
						className="absolute right-2 top-[-44px]"
					/>
					<div className="w-8 h-3 bg-blue absolute top-2 right-2"></div>
				</div>
			</div>
		</div>
	);
};

export default GlobalAdvertising;
