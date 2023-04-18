import React from 'react';
import { roundStat } from '@/helpers/roundStat';

interface StatItemProps {
	content: number;
	title: string;
	styles: string;
}

const StatItem: React.FC<StatItemProps> = ({ content, title, styles }) => {
	return (
		<div className={styles}>
			<span className="text-blue font-bold text-3xl leading-10">
				{roundStat(content)}
			</span>
			<p className="font-inter text-base text-black">{title}</p>
		</div>
	);
};

export default StatItem;
