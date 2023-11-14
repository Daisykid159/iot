// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Thay đổi URL API cụ thể của bạn

export const getListDV = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/listdv`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getDetailDV = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/detaildv/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteItem = async (id) => {
    try {
        await axios.delete(`${API_URL}/listdv/${id}`);
    } catch (error) {
        throw error;
    }
};
