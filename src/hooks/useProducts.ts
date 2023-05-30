import { useMutation, useQuery } from '@tanstack/react-query';

import api from '../api/api';
import { IProduct } from '../types/interfaces';

const fetchProducts = (): Promise<IProduct[]> => {
	return api.get('/products');
};

const createProduct = (newProduct: IProduct): Promise<IProduct> => {
	return api.post('/products', newProduct);
};

const deleteProduct = (productId: string): Promise<void> => {
	return api.delete(`/products/${productId}`);
};

const useProductList = () => {
	return useQuery(['fetchProducts'], () => fetchProducts());
};

const useCreateProduct = () => {
	return useMutation(['createProduct'], createProduct);
};

const useDeleteProduct = () => {
	return useMutation(['deleteProduct'], deleteProduct);
};

export { useProductList, useCreateProduct, useDeleteProduct };
