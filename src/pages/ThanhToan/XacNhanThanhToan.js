import React from 'react';
import './ThanhToan.css';

const XacNhanThanhToan = (props) => {

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="XoaDV">
            <p className="textXoa" >Vui lòng bấm xác nhận thanh toán</p>
            <div className='btns'>
                <button onClick={() => props.onCancel()} className='btn'>Hủy</button>
                <button onClick={() => props.onConfirm()} className='btn btnRed'>Xác nhận</button>
            </div>
        </div>
    );
};

export default XacNhanThanhToan;
