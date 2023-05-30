import { Suspense, lazy, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import Spinner from './components/Spinner';
import Products from './pages/Products';

const ProductForm = lazy(() => import('./pages/Products/ProductForm'));
const ContentModal = lazy(() => import('./components/Modal/ContentModal'));

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		handleModalOpen();
	};

	return (
		<>
			<div className="relative container mx-auto max-w-2xl items-center relative">
				<Navbar handleAddProduct={handleAddProduct} />
				<Products />
			</div>
			{isModalOpen && (
				<Suspense fallback={<Spinner />}>
					<ContentModal
						isOpen={isModalOpen}
						handleClose={handleModalClose}
						title={'Add Product'}
					>
						<ProductForm handleModalClose={handleModalClose} />
					</ContentModal>
				</Suspense>
			)}
			<Toaster position="bottom-right" />
		</>
	);
}

export default App;
