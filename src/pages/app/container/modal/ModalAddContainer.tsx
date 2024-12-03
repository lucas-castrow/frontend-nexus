import Modal from '../../../../components/modals/Modal';
import React from 'react';
import InputMask from 'react-input-mask';
import { FaBuilding, FaIdCard, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { NumericFormat } from 'react-number-format';
interface ModalProps {
	title: string;
	onClose: () => void;
}

const ModalAddTransporter: React.FC<ModalProps> = ({ title, onClose }) => {
	return (
		<Modal title={title} isOpen={true} onClose={onClose}>
			<form>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome da Transportadora</label>
					<div className="relative mt-1">
						<FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-100 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="Nome da Transportadora"
						/>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">CNPJ</label>
					<div className="relative mt-1">
						<FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<InputMask
							mask="99.999.999/9999-99"
							className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="CNPJ"
						/>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contato</label>
					<div className="relative mt-1">
						<FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<InputMask
							mask="(99) 99999-9999"
							className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="Contato"
						/>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Endereço</label>
					<div className="relative mt-1">
						<FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
							placeholder="Endereço"
						/>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preço fixo por dias</label>
					<div className="mt-1">
						<label className="block text-sm font-small text-gray-600 dark:text-gray-300">Cheio</label>
						<div className="flex space-x-4 mt-1">
							<input
								type="number"
								className="p-2 w-1/3 bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
								placeholder="Dias"
							/>
							<div className="relative w-2/3">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
								<NumericFormat
									thousandSeparator="."
									decimalSeparator=","
									allowNegative={false}
									className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
									placeholder="Preço"
								/>
							</div>
						</div>
					</div>
					<div className="mt-4">
						<label className="block text-sm font-small text-gray-600 dark:text-gray-300">Vazio</label>
						<div className="flex space-x-4 mt-1">
							<input
								type="number"
								className="p-2 w-1/3 bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
								placeholder="Dias"
							/>
							<div className="relative w-2/3">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
								<NumericFormat
									thousandSeparator="."
									decimalSeparator=","
									allowNegative={false}
									className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
									placeholder="Preço"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preço/dia após dias fixos</label>
					<div className="flex space-x-4 mt-1">
						<div className="w-1/2">
							<label className="block text-sm font-small text-gray-600 dark:text-gray-300">Cheio</label>

							<div className="relative mt-1">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
								<NumericFormat
									thousandSeparator="."
									decimalSeparator=","
									allowNegative={false}
									className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
									placeholder="Preço"
								/>
							</div>
						</div>
						<div className="w-1/2">
							<label className="block text-sm font-small text-gray-600 dark:text-gray-300">Vazio</label>

							<div className="relative mt-1">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">R$</span>
								<NumericFormat
									thousandSeparator="."
									decimalSeparator=","
									allowNegative={false}
									className="pl-10 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:border-blue-500"
									placeholder="Preço"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600">Cancelar</button>
					<button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-blue-800 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-900">Registrar</button>
				</div>
			</form>
		</Modal>
	);
};

export default ModalAddTransporter;