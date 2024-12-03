import { useNavigate } from 'react-router-dom';
import { transporters_list } from '../../../api/mocks/transporters/transporters_page';
import NewTabIcon from '../../../components/icons/new-tab';
import { Table, Column, Action, Pagination } from '../../../components/ui/table';
import { useState } from 'react';
import ModalAddTransporter from '../container/modal/ModalAddContainer';
import { PencilIcon, TrashIcon } from 'lucide-react';

const columns: Column[] = [
	{ header: 'Transportadora', accessor: 'transporter' },
	{ header: 'A chegar', accessor: 'incoming' },
	{ header: 'No pátio', accessor: 'received' },
	{ header: 'Cadastrado', accessor: 'created_at' },
];


const Home = () => {
	const navigate = useNavigate();
	const [caseModal, setCaseModal] = useState<string | null>(null);
	const openModal = (option: string | null) => setCaseModal(option);
	const closeModal = () => setCaseModal(null);

	const modal = (caseModal: string | null) => {
		switch (caseModal) {
			case "add":
				return <ModalAddTransporter title={"Adicionar Transportadora"} onClose={closeModal} />
			default:
				return
		}
	}

	const actions: Action[] = [

		{
			label: 'Remover',
			onClick: (row) => openModal("add"),
			icon: (
				<TrashIcon />
			),
		},
		{
			label: 'Editar',
			onClick: (row) => openModal("add"),
			icon: (
				<PencilIcon />
			),
		},
		{
			label: 'Visualizar',
			onClick: (row) => navigate(`/transporter/${row.id}`),
			icon: (
				<NewTabIcon />
			),
		},

	];

	const pagination: Pagination = {
		currentPage: 3,
		totalPages: 10,
		pageSize: 10,
		totalItems: 100,
		onPageChange: (page) => console.log('Page:', page),
	};

	return (
		<div>
			<div className='container grid px-6 mx-auto'>
				<div className="flex justify-between items-center py-4">
					<h1 className="text-2xl font-semibold">Transportadoras</h1>
					<button
						onClick={() => openModal("add")}
						className="text-white bg-green-500 dark:bg-green-800 px-4 py-2 rounded"
					>
						Adicionar transportadora
					</button>
				</div>
				<Table columns={columns} data={transporters_list} actions={actions} pagination={pagination} />
			</div>
			{modal(caseModal)}
		</div>
	);
};

export default Home;