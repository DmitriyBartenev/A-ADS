import React from 'react';

const MonetizationOptions: React.FC = () => {
	return (
		<div className="flex justify-between items-start py-28 px-64">
			<h3 className="text-black text-3xl leading-[48px] font-bold max-w-md">
				A-ADS provides alternative technologies for{' '}
				<span className="text-blue">monetizing your traffic</span>
			</h3>
			<div className="font-inter text-base font-medium text-lightGray max-w-sm">
				<p className="mb-5">
					In addition to the ability to sell ads on your website directly, you
					can also earn from the pool of our active advertisers.
				</p>
				<p>
					Our advertising model doesn't limit your earnings by clicks and
					impressions, but expands it with advertisers' budgets they eager to
					spend on your website.
				</p>
			</div>
		</div>
	);
};

export default MonetizationOptions;
