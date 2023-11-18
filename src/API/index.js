// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Thay đổi URL API cụ thể của bạn

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
        const response = await axios.get(`${API_URL}/user/getAll`);
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

// Api thanh toán
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
            "id_user": id_user,
            "totalPrice": totalPrice,
            "usePoint": usePoint,
            "productCustomList": listspCanTT
        });
        console.log(response);
        return response;
        // dinh dang yyyy-MM-dd
        // private String createdDate;
        // private Long id_user;
        // private Double totalPrice; tổng tiền
        // private boolean usePoint; dùng điểm hay không
        // private  List<ProductCustom> productCustomList = new ArrayList<>(); mảng gồm id sản phẩm và số lượng sản phẩm
    } catch (error) {
        throw error;
    }
};

