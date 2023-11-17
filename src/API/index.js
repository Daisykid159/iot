// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Thay đổi URL API cụ thể của bạn

// Api lấy danh sách sản phẩm
export const getListSp = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/product/getAll`);
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
        return response;
    } catch (error) {
        throw error;
    }
};

// Api thêm khách hàng mới
export const addUser = async (name, sdt, uid) => {
    try {
        const response = await axios.post(`${API_URL}/user/create`, {
            name: name,
            phone: sdt,
            uid: uid,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

// Api lấy id thẻ Rfid
export const getlistRfid = async () => {
    try {
        const response = await axios.get(`${API_URL}/rfid/getIsntAction`);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api thanh toán
export const summit = async (uid, price) => {

};

