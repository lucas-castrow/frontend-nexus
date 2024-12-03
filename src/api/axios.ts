import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getMockTransporterData } from '../api/mocks/transporters/mock-transporter-data';

const isMock = true;

const mockDataMap: { [key: string]: () => any } = {
	'/transporter': getMockTransporterData,
	// Adicione mais mapeamentos de URL para funções de dados mockados aqui
};

const fetchApi = async (url: string, options?: RequestInit): Promise<any> => {
	if (isMock) {
		console.log('Mock API Request:', url);
		const mockDataFunction = mockDataMap[url];
		if (mockDataFunction) {
			return new Promise((resolve) => {
				setTimeout(() => {
					console.log('Mock API Response:', url);
					resolve({
						status: 200,
						json: () => Promise.resolve(mockDataFunction()),
					});
				}, 500);
			});
		} else {
			return new Promise((resolve) => {
				setTimeout(() => {
					console.log('Mock API Response Error:', url);
					resolve({
						status: 404,
						json: () => Promise.resolve({ message: 'Not Found' }),
					});
				}, 500);
			});
		}
	} else {
		const token = localStorage.getItem('token');
		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...(token && { Authorization: `Bearer ${token}` }),
			...options?.headers,
		};

		const response = await fetch(url, {
			...options,
			headers,
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'API request failed');
		}

		return response.json();
	}
};

export default fetchApi;