import { PlusCircleIcon, ServerStackIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../Button';

interface NavbarProps {
	handleAddProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ handleAddProduct }) => {
	return (
		<nav className="flex flex-col items-center justify-between gap-4 bg-primary p-6 md:flex-row ">
			<div className="mr-6 flex flex-shrink-0 items-center gap-1 text-white">
				<ServerStackIcon className="h-5 w-5" />

				<span className="text-xl font-semibold tracking-tight">
					Products List
				</span>
			</div>
			<Button
				label="Add Product"
				intent="primary"
				onClick={handleAddProduct}
				icon={<PlusCircleIcon className="h-5 w-5 font-bold" />}
			/>
		</nav>
	);
};
