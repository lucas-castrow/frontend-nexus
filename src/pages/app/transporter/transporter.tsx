import { BarChartComponent } from '../../../components/charts/bar-chart';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChartConfig } from 'src/components/ui/chart';
import { getMockTransporterData, TransporterData } from '../../../api/mocks/transporters/mock-transporter-data';
import ModalRegisterContainer from './modal/ModalRegisterContainer';

const Transporter = () => {
	const { id } = useParams<{ id: string }>();
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 2;

	const [transporterData, setTransporterData] = useState<TransporterData | null>(null);
	const [caseModal, setCaseModal] = useState<string | null>(null);
	const openModal = (option: string | null) => setCaseModal(option);
	const closeModal = () => setCaseModal(null);



	const modal = (caseModal: string | null) => {
		switch (caseModal) {
			case "add":
				return <ModalRegisterContainer title={"Registrar container"} onClose={closeModal} />
			default:
				return
		}
	}

	useEffect(() => {
		setTransporterData(getMockTransporterData());
	}, []);

	if (!transporterData) {
		return <div>Loading...</div>;
	}

	const filteredContainers = transporterData.containers.filter(container =>
		container.number.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const totalPages = Math.ceil(filteredContainers.length / itemsPerPage);
	const displayedContainers = filteredContainers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const chartConfig = {
		entry: {
			label: "Entrada",
			color: "hsl(var(--chart-1))",
		},
		exit: {
			label: "Saída",
			color: "hsl(var(--chart-2))",
		},
	} satisfies ChartConfig;

	return (
		<div className="min-h-screen bg-background text-foreground text-foreground">
			{/* Main Content */}
			<div className="p-4 md:p-8">
				<header className="flex flex-col md:flex-row justify-between items-center mb-8">
					<h1 className="text-3xl font-bold mb-4 md:mb-0">Transportadora X</h1>
					<button className="text-white bg-green-500 dark:bg-green-800 px-4 py-2 rounded" onClick={() => openModal("add")}>Registrar container</button>
				</header>

				{/* Overview Section */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
					<div className="bg-card p-6 rounded">
						<h2 className="text-xl font-semibold">Dados</h2>
						<p className="mt-4">Endereço: <span className="font-bold">{transporterData.address}</span></p>
						<p className="mt-2">CNPJ: <span className="font-bold">{transporterData.cnpj}</span></p>
						<p className="mt-2">Telefone: <span className="font-bold">{transporterData.phone}</span></p>
					</div>
					<div className="bg-card p-6 rounded">
						<h2 className="text-xl font-semibold">Containers no pátio</h2>
						<p className="text-4xl font-bold mt-4">{transporterData.containersInYard}</p>
					</div>
					<div className="bg-card p-6 rounded">
						<h2 className="text-xl font-semibold">Containers à receber</h2>
						<p className="text-4xl font-bold mt-4">{transporterData.containersToReceive}</p>
						<button className="mt-4 text-blue-500 hover:underline">Visualizar</button>
					</div>
				</section>

				{/* Container Management */}
				<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
					<div className="lg:col-span-2 bg-card p-6 rounded">
						<header className="flex justify-between items-center">
							<h2 className="text-xl font-semibold">Containers</h2>
						</header>
						<table className="w-full mt-4 text-left">
							<thead>
								<tr className="bg-gray-300 dark:bg-gray-800">
									<th className="p-2">Data</th>
									<th className="p-2">Entrada</th>
									<th className="p-2">Saída</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="p-2">Últimos 7 dias</td>
									<td className="p-2">{transporterData.last7Days.entry}</td>
									<td className="p-2">{transporterData.last7Days.exit}</td>
								</tr>
								<tr>
									<td className="p-2">Últimos 30 dias</td>
									<td className="p-2">{transporterData.last30Days.entry}</td>
									<td className="p-2">{transporterData.last30Days.exit}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="bg-card p-6 rounded">
						<div className="mt-4">
							<BarChartComponent config={chartConfig} data={transporterData.chartData} title='Registro de containers nos últimos meses' />
						</div>
					</div>
				</section>

				{/* Containers details */}
				<section>
					<div className="flex flex-col md:flex-row justify-between items-center mb-4">
						<h2 className="text-xl font-semibold mb-4 md:mb-0">Informações dos containers</h2>
						<input
							type="text"
							placeholder="Pesquisar containers"
							className="p-2 bg-input dark:bg-gray-700 rounded"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="space-y-4">
						{displayedContainers.map((container) => (
							<div key={container.id} className="bg-card dark:bg-gray-800 p-4 rounded flex flex-col md:flex-row justify-between items-center">
								<div className="mb-4 md:mb-0">
									<h3 className="font-bold">{container.number}</h3>
									<p>{container.link}</p>
								</div>
								<div className="mb-4 md:mb-0">
									<p>Custo: <span className="font-bold">{container.price}</span></p>
									<p>Dias: <span className="font-bold">{container.days}</span></p>
								</div>
								<button className="bg-input dark:bg-gray-700 px-4 py-2 rounded">Visualizar</button>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center mt-4">
						<button
							className="px-3 py-1 bg-gray-300 dark:bg-gray-800 rounded"
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
						>
							Voltar
						</button>
						<span>Página {currentPage} de {totalPages}</span>
						<button
							className="px-3 py-1 bg-gray-300 dark:bg-gray-800 rounded"
							onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
							disabled={currentPage === totalPages}
						>
							Próximo
						</button>
					</div>
				</section>
			</div>
			{modal(caseModal)}
		</div>
	);
};

export default Transporter;