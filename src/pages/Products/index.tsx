import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ContentLoader from '../../components/ContentLoader';
import EmptyComponent from '../../components/EmptyComponent';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';
import { useDeleteProduct, useProductList } from '../../hooks/useProducts';
import { IProduct } from '../../types/interfaces';
import Product from './Product';

const Products = () => {
	const { data: products, refetch, isLoading } = useProductList();

	const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const handleDelete = (id: string | undefined) => {
		if (!id) return;
		setSelectedId(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteConfirm = () => {
		if (!selectedId) return;
		deleteProduct(selectedId, {
			onSuccess: () => {
				toast.success('Product deleted successfully');
				refetch();
				handleModalClose();
			},
			onError: () => {
				toast.error('Error deleting product');
			},
		});
	};

	const handleModalClose = () => {
		setIsDeleteModalOpen(false);
		setSelectedId(null);
	};

	if (isLoading) return <ContentLoader />;

	return (
		<>
			{products && products?.length > 0 ? (
				<div className="mx-auto my-4 grid w-[90%] cursor-default grid-cols-1 gap-6 md:w-full md:grid-cols-3 md:gap-4">
					{products?.map((product: IProduct) => (
						<Product
							key={product.id}
							product={product}
							handleDelete={handleDelete}
						/>
					))}
				</div>
			) : (
				<EmptyComponent />
			)}
			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				handleClose={handleModalClose}
				handleConfirm={handleDeleteConfirm}
				isDeleting={isDeleting}
			/>
		</>
	);
};

export default Products;
