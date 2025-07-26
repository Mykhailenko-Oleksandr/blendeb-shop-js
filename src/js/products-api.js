import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS, ITEMS_PER_PAGE } from './constants';

axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
    const results = await axios(`${API_ENDPOINTS.CATEGORIES}`);

    return results.data;
}

export async function getProducts(currentPage) {
    const skip = (currentPage - 1) * ITEMS_PER_PAGE;

    const { data } = await axios(`?limit=${ITEMS_PER_PAGE}&skip=${skip}`);
    return data;
}
