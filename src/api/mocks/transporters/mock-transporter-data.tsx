export interface Container {
	id: number;
	number: string;
	link: string;
	price: string;
	days: string;
}

export interface ChartData {
	month: string;
	entry: number;
	exit: number;
}

export interface TransporterData {
	address: string;
	cnpj: string;
	phone: string;
	containersInYard: number;
	containersToReceive: number;
	last7Days: { entry: number; exit: number };
	last30Days: { entry: number; exit: number };
	containers: Container[];
	chartData: ChartData[];
}

export const getMockTransporterData = (): TransporterData => {
	return {
		address: 'Rua Exemplo, 123',
		cnpj: '12.345.678/0001-99',
		phone: '41 98452-3123',
		containersInYard: 50,
		containersToReceive: 5,
		last7Days: { entry: 3, exit: 15 },
		last30Days: { entry: 3, exit: 5 },
		containers: [
			{ id: 1, number: 'Container - 3600', link: 'link.container-3600.link', price: 'R$ 299', days: '5' },
			{ id: 2, number: 'Container - 3601', link: 'link.container-3601.link', price: 'R$ 99', days: '3' },
			{ id: 3, number: 'Container - 3602', link: 'link.container-3602.link', price: 'R$ 250', days: '2' },
			{ id: 4, number: 'Container - 3603', link: 'link.container-3603.link', price: 'R$ 150', days: '8' },
		],
		chartData: [
			{ month: "Janeiro", entry: 186, exit: 80 },
			{ month: "Fevereiro", entry: 305, exit: 200 },
			{ month: "Março", entry: 237, exit: 120 },
			{ month: "Abril", entry: 73, exit: 190 },
			{ month: "Maio", entry: 209, exit: 130 },
			{ month: "Junho", entry: 214, exit: 140 },
		],
	};
};