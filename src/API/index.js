// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Thay đổi URL API cụ thể của bạn

// Api lấy danh sách sản phẩm
export const getListSp = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/listsp`);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api lấy thông tin user
export const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api thêm sản phẩm vào danh sách
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

// Api xóa sản phẩm khỏi danh sách
export const deleteItem = async (id) => {
    try {
        await axios.delete(`${API_URL}/deletesp/${id}`);
    } catch (error) {
        throw error;
    }
};

// Api thêm khách hàng mới
export const addUser = async (name, sdt) => {

};

// Api thanh toán
export const summit = async (uid, price) => {

};

