export interface IStatItem {
	'15m': number;
	last: number;
	buy: number;
	sell: number;
	symbol: string;
}

export interface IStats {
	USD: IStatItem;
	EUR: IStatItem;
	GBP: IStatItem;
}
