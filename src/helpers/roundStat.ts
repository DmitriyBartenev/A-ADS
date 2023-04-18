export const roundStat = (stat: number | string): number => {
	const numStat = typeof stat === 'number' ? stat : Number(stat);

	if (isNaN(numStat)) {
		throw new Error('Invalid stat: not a number');
	}

	return Math.round(numStat);
};
