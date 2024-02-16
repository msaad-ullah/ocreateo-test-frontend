import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url, params) => {
  try {
    const response = await apiService.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const post = async (url, data) => {
  try {
    const response = await apiService.post(url, data);
    console.log('response: ',response)
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const put = async (url, data) => {
  try {
    const response = await apiService.put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const patch = async (url, data) => {
  try {
    const response = await apiService.patch(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const remove = async (url) => {
  try {
    const response = await apiService.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export default apiService;
