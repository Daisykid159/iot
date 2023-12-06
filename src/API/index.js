// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Thay đổi URL API cụ thể của bạn

/* Api modul thống kê */

/* Api thống kê User */

// Api getAll User
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/getAll`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm khách hàng từ ngày ... đến ngày ...
export const searchUserByDate = async (dateFrom, dateTo) => {
    try {
        console.log(dateFrom, dateTo);
        const response = await axios.get(`${API_URL}/user/findUsersByBillOfDate/${dateFrom}/to/${dateTo}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm khách hàng theo tên
export const searchUserByName = async (nameUser) => {
    try {
        console.log(nameUser);
        const response = await axios.get(`${API_URL}/user/findUsersByName/${nameUser}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm khách hàng theo SDT
export const searchUserByPhone = async (phoneUser) => {
    try {
        console.log(phoneUser);
        const response = await axios.get(`${API_URL}/user/findUsersByPhone/${phoneUser}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api call id user vs dateFrom anh dateTo
export const searchUserByDateAndIdUser = async (IdUser, dateFrom, dateTo) => {
    try {
        console.log(dateFrom, dateTo);
        const response = await axios.get(`${API_URL}/bill/getBillsOfUserByUserIdInRange/${IdUser}/in/${dateFrom}/to/${dateTo}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api call chi tiết hóa đơn
export const getDetailBillOfUserByIdBill = async (IdBill) => {
    try {
        const response = await axios.get(`${API_URL}/user/getDetailBillOfUserByIdBill/${IdBill}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api call id user
export const searchUserByIdUser = async (IdUser) => {
    try {
        const response = await axios.get(`${API_URL}/bill/getAllBillOfUserBy/${IdUser}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

/* Api thông kê mặt hàng */

// Api getAll mặt hàng
export const getAllMH = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/getAll`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm mặt hàng từ ngày ... đến ngày ...
export const searchMHByDate = async (dateFrom, dateTo) => {
    try {
        const response = await axios.get(`${API_URL}/product/getProductSoldByDate/${dateFrom}/to/${dateTo}`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm mặt hàng theo tên
export const searchMHByName = async (nameMH) => {
    try {
        const response = await axios.get(`${API_URL}/user/getAll`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

// Api tìm kiếm mặt hàng theo ID
export const searchMHByID = async (IDMH) => {
    try {
        const response = await axios.get(`${API_URL}/user/getAll`);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
};

/* APi modul thanh toán */

// Api lấy danh sách all sản phẩm
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
        const response = await axios.get(`${API_URL}/user/current`);
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
            point: 0,
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

// Api thanh toán không có user
export const summitThanhToanNotUser = async (dayTT, totalPrice, productCustomList) => {
    try {
        const listspCanTT = productCustomList.map((item) => {
            return {
                id: item.id_product,
                quantity: item.quantity,
            };
        });
        const response = await axios.post(`${API_URL}/bill/create`, {
            "createdDate": dayTT,
            "totalPrice": totalPrice,
            "productCustomList": listspCanTT
        });
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}

// Api thanh toán có user
export const summitThanhToan = async (dayTT, id_user, totalPrice, usePoint, productCustomList) => {
    try {

        const listspCanTT = productCustomList.map((item) => {
            return {
                id: item.id_product,
                quantity: item.quantity,
            };
        });

        const response = await axios.post(`${API_URL}/bill/create/${id_user}`, {
            "createdDate": dayTT,
            "totalPrice": totalPrice,
            "productCustomList": listspCanTT
        });
        console.log(response, "User");
        return response;
    } catch (error) {
        throw error;
    }
};

