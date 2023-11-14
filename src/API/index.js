// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Thay đổi URL API cụ thể của bạn

export const getListSp = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/listsp`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getAddSp = async (id, sl) => {
    try {
        const response = await axios.post('http://localhost:3001/api/addsp', {
            id: parseInt(id, 10),
            sl: parseInt(sl, 10),
        });
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteItem = async (id) => {
    try {
        await axios.delete(`${API_URL}/deletesp/${id}`);
    } catch (error) {
        throw error;
    }
};
