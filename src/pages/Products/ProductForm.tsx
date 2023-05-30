import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useCreateProduct, useProductList } from '../../hooks/useProducts';
import { IProduct } from '../../types/interfaces';

const defaultFormValues = {
	name: '',
	description: '',
	price: 0,
	imageUrl: '',
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.max(25, 'Name should be less than 25 characters')
		.required('Name is required'),
	description: yup
		.string()
		.max(125, 'Description should be less than 125 characters')
		.required('Description is required'),
	price: yup
		.number()
		.min(1, 'Price must be greater than 0')
		.required('Price is required'),
	imageUrl: yup.string().required('Image URL is required'),
});

interface ProductFormProps {
	handleModalClose: () => void;
}

function ProductForm({ handleModalClose }: ProductFormProps) {
	const { refetch } = useProductList();
	const { mutate: createProduct, isLoading: isSubmitting } = useCreateProduct();

	const methods = useForm<IProduct>({
		defaultValues: defaultFormValues,
		resolver: yupResolver(validationSchema),
	});

	const {
		formState: { errors },
		handleSubmit,
	} = methods;

	const handleSubmitProduct: SubmitHandler<IProduct> = (product) => {
		createProduct(product, {
			onSuccess: () => {
				toast.success('Product created successfully');
				handleModalClose();
				refetch();
			},
			onError: () => {
				toast.error('Error creating product');
			},
		});
	};

	return (
		<FormProvider {...methods}>
			<form
				className="product-form m-4 rounded-lg bg-background p-8"
				onSubmit={handleSubmit(handleSubmitProduct)}
			>
				<div className="form-group mb-4">
					<Input
						label="Name"
						placeholder="Apple iPhone X"
						name="name"
						error={errors?.name?.message}
						isRequired
					/>
				</div>
				<div className="form-group mb-4">
					<Input
						label="Description"
						placeholder="A smart phone"
						name="description"
						error={errors?.description?.message}
						rows={4}
						isRequired
					/>
				</div>
				<div className="form-group mb-4">
					<Input
						label="Price($)"
						placeholder="0.00"
						name="price"
						type="number"
						error={errors?.price?.message}
						isRequired
					/>
				</div>

				<div className="form-group mb-4">
					<Input
						label="Image URL"
						placeholder="https://"
						name="imageUrl"
						error={errors?.imageUrl?.message}
						isRequired
					/>
				</div>
				<Button
					label="Save"
					intent="primary"
					icon={<PlusCircleIcon className="h-5 w-5 font-bold" />}
					fullWidth
          loading={isSubmitting}
				/>
			</form>
		</FormProvider>
	);
}

export default ProductForm;
