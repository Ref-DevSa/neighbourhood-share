import type { Item } from "./Item";

export type Booking = {
	id: string;
	item: Item;
	startDate: string; // YYYY-MM-DD
	endDate: string; // YYYY-MM-DD
	totalDays: number;
	totalCost: number;
};

export default Booking;

