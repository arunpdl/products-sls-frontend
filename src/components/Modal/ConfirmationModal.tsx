import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Button from '../Button';

interface DeleteConfirmationModalProps {
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
	isDeleting: boolean;
}

function DeleteConfirmationModal({
	isOpen,
	handleClose,
	handleConfirm,
	isDeleting
}: DeleteConfirmationModalProps) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={handleClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-text"
								>
									Confirm Delete
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										Are you sure you want to delete this product?
									</p>
								</div>

								<div className="mt-4 flex justify-end gap-2">
									<Button
										label="Cancel"
										intent="secondary"
										onClick={handleClose}
									/>
									<Button
										label="Confirm"
										intent="danger"
										onClick={handleConfirm}
										loading={isDeleting}
									/>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default DeleteConfirmationModal;
