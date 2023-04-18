import React from 'react';

interface StatItemProps {
	content: string;
	title: string;
	styles: string;
}

const StatItem: React.FC<StatItemProps> = ({ content, title, styles }) => {
	return (
		<div
			className={`${styles} pl-0 pr-0 flex flex-col items-center sm:items-start`}
		>
			<span className="text-blue font-bold text-3xl leading-10">{content}</span>
			<p className="font-inter text-base text-black">{title}</p>
		</div>
	);
};

export default StatItem;
