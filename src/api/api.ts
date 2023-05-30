import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const TIMEOUT_DURATION = 2 * 60 * 1000;

const instance = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
	timeout: TIMEOUT_DURATION,
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.response.use(
	function (response: AxiosResponse) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
		instance.get<T>(url, config).then(responseBody),

	post: <T, P>(url: string, body: P, config?: AxiosRequestConfig): Promise<T> =>
		instance.post(url, body, config).then(responseBody),

	put: <T, P>(url: string, body: P): Promise<T> =>
		instance.put(url, body).then(responseBody),

	patch: <T, P>(url: string, body: P): Promise<T> =>
		instance.patch(url, body).then(responseBody),

	delete: <T>(url: string): Promise<T> =>
		instance.delete(url).then(responseBody),

	multipartPost: <T, P>(url: string, body: P): Promise<T> =>
		instance
			.post(url, body, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(responseBody),
};

export default requests;
