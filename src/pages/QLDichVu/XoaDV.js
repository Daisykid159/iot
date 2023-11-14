import React from 'react';
import './qldv.css';

const XoaDV = (props) => {

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="XoaDV">
            <div className="textXoa">
                <p>Bạn có chắc chắn muốn xóa mục này?</p>
                <div className='btns'>
                    <button onClick={() => props.onCancel()} className='btn'>Hủy</button>
                    <button onClick={() => props.onConfirm()} className='btn'>Xác nhận</button>
                </div>
            </div>
        </div>
    );
};

export default XoaDV;
