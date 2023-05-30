import { TrashIcon } from '@heroicons/react/24/outline';
import { SyntheticEvent } from 'react';
import FallbackImage from '../../assets/placeholder.png';
import { IProduct } from '../../types/interfaces';
import formatPrice from '../../utils/formatPrice';

interface ProductProps {
	product: IProduct;
	handleDelete: (id: string | undefined) => void;
}

function Product({ product, handleDelete }: ProductProps) {
	const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = FallbackImage;
	};

	return (
		<div className="card flex flex-1 flex-col justify-between gap-2">
			<div>
				<img
					src={product.imageUrl}
					alt={product.name}
					onError={handleImageError}
					className="h-48 w-full object-cover"
				/>
				<h3 className="px-2 py-2 text-lg font-bold text-gray-800">
					{product.name}
				</h3>
				<p className="px-2 text-sm text-gray-600">{product.description}</p>
			</div>
			<div className="flex justify-between px-2 py-2">
				<span className="text-xl font-semibold text-gray-800">
					{formatPrice(product.price)}
				</span>
				<TrashIcon
					className="h-5 w-5 cursor-pointer text-danger transition ease-linear hover:scale-110"
					onClick={() => handleDelete(product.id)}
				/>
			</div>
		</div>
	);
}

export default Product;
