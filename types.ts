export interface CategoryState {
	title: string;
	timeframes: {
		daily: {
			current: number;
			previous: number;
		};
		weekly: {
			current: number;
			previous: number;
		};
		monthly: {
			current: number;
			previous: number;
		};
	};
	color?: string;
	icon?: string;
}