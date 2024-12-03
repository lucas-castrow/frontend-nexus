import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from "@radix-ui/react-dialog";

interface ModalProps {
	isOpen: boolean;
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
			<DialogContent className="fixed inset-0 flex items-center justify-center p-4">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
					<div className="flex justify-between items-center mb-4">
						<DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
						<button onClick={onClose} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<DialogDescription>{children}</DialogDescription>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;