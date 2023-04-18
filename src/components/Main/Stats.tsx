import React from 'react';

import useHttp from '@/hooks/useHttp';
import { IStats } from '@/models/IStats';

import StatItem from './StatItem';

const Stats: React.FC = () => {
	const { response, error, isLoading } = useHttp<IStats>({
		url: 'https://www.blockchain.com/ticker',
		method: 'get',
	});

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error</p>;
	}

	return (
		<div className="flex items-center mb-8">
			{response && (
				<>
					<StatItem
						content={response.USD.last}
						title="Active publishers"
						styles="pr-8"
					/>
					<StatItem
						content={response.EUR.last}
						title="Publishers earn per day"
						styles="px-8 border-x-[1px]"
					/>
					<StatItem
						content={response.GBP.last}
						title="Active campaigns"
						styles="pl-8"
					/>
				</>
			)}
		</div>
	);
};

export default Stats;
