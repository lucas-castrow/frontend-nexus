import Modal from '../../../../components/modals/Modal';
import React from 'react';


interface ModalProps {
	title: string;
	onClose: () => void;
}
const ModalRegisterContainer: React.FC<ModalProps> = ({ title, onClose }) => {
	return (
		<Modal title={title} isOpen={true} onClose={onClose} >
			<form>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Número do Container</label>
					<input
						type="text"
						className="mt-1 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700"
						placeholder="Número do Container"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Link</label>
					<input
						type="text"
						className="mt-1 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700"
						placeholder="Link"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preço</label>
					<input
						type="text"
						className="mt-1 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700"
						placeholder="Preço"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Dias</label>
					<input
						type="text"
						className="mt-1 p-2 w-full bg-input dark:bg-input-dark rounded border border-gray-300 dark:border-gray-700"
						placeholder="Dias"
					/>
				</div>
				<div className="flex justify-end">
					<button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancelar</button>
					<button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-blue-800 text-white rounded">Registrar</button>
				</div>
			</form>
		</Modal >
	);
};

export default ModalRegisterContainer;
