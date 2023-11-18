import React from 'react';
import './ThanhToan.css';

const XoaSp = (props) => {

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="XoaDV">
            <p className="textXoa" >Bạn có chắc chắn muốn xóa mục này?</p>
            <div className='btns'>
                <button onClick={() => props.onCancel()} className='btn'>Hủy</button>
                <button onClick={() => props.onConfirm()} className='btn btnRed'>Xác nhận</button>
            </div>
        </div>
    );
};

export default XoaSp;
