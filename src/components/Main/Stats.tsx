import React from 'react';

import useHttp from '@/hooks/useHttp';
import { roundStat } from '@/helpers/roundStat';

import { IStats } from '@/models/IStats';

import StatItem from './StatItem';
import { Button } from '../ui/Button';

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
		<div className="flex flex-col-reverse sm:flex-col items-center sm:items-start">
			{response && (
				<div className="flex items-center mb-8 mt-10 sm:mt-0 flex-col sm:flex-row bg-white sm:bg-transparent py-7 sm:py-0 px-8 sm:px-0 rounded">
					<StatItem
						content={`${roundStat(response.USD.last)}`}
						title="Active publishers"
						styles="sm:pr-8 pb-5 sm:pb-0"
					/>
					<StatItem
						content={`$${roundStat(response.EUR.last)}`}
						title="Publishers earn per day"
						styles="sm:px-8 sm:border-x border-y sm:border-y-0 pt-5 pb-5 sm:pb-0 sm:pt-0"
					/>
					<StatItem
						content={`${roundStat(response.GBP.last)}`}
						title="Active campaigns"
						styles="sm:pl-8 pt-5 sm:pt-0"
					/>
				</div>
			)}
			<Button title="Start Now" />
		</div>
	);
};

export default Stats;
