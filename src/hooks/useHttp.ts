import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

interface AxiosHookState<T> {
	isLoading: boolean;
	response: T | null;
	error: string | null;
}

interface AxiosHookProps {
	url: string;
	method?: AxiosRequestConfig['method'];
	data?: AxiosRequestConfig['data'];
	headers?: AxiosRequestConfig['headers'];
}

const useHttp = <T>(props: AxiosHookProps): AxiosHookState<T> => {
	const [state, setState] = useState<AxiosHookState<T>>({
		isLoading: true,
		response: null,
		error: null,
	});

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const response: AxiosResponse<T> = await axios({
					url: props.url,
					method: props.method || 'get',
					data: props.data || undefined,
					headers: props.headers || undefined,
				});
				setState({ isLoading: false, response: response.data, error: null });
			} catch (e) {
				const error = e as Error;
				setState({ isLoading: false, response: null, error: error.message });
			}
		};
		fetchData();
	}, [props.url, props.method, props.data, props.headers]);

	return state;
};

export default useHttp;
