import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

interface ContentModalProps {
	isOpen: boolean;
	handleClose: () => void;
	title: string;
	children: React.ReactNode;
}

function ContentModal({
	isOpen,
	handleClose,
	title,
	children,
}: ContentModalProps) {
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
							<Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-sm bg-background p-6 text-center align-middle shadow-xl transition-all">
								<XCircleIcon
									role="button"
									className="absolute right-0 top-0 h-6 w-6 cursor-pointer  transition ease-linear hover:scale-110"
									onClick={handleClose}
								/>
								<Dialog.Title
									as="h3"
									className="text-xl font-bold leading-6 text-text"
								>
									{title}
								</Dialog.Title>
								<div className="mt-2">{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default ContentModal;
