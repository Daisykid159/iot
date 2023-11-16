import { useState } from 'react';
import './ThanhToan.css';
import IconClose from "~/Icon/IconClose";

function AddUser(props) {

    const [userName, setUserName] = useState('');
    const [userSDT, setUserSDT] = useState('');

    const handleClickAddUser = () => {
        alert(`Thêm thành công\nTên khách hàng: ${userName}\nSĐT Khách hàng: ${userSDT}`);
        setUserName('');
        setUserSDT('');
        props.setIsShowAdd(false)
    };

    return (
        <div className="gdAddKH">
            <div className="TextHeader TextHeaderSmall">NHẬP THÔNG TIN KHÁCH HÀNG</div>

            <div className="rowTT">
                <p className="totalAdd">Tên khách hàng:</p>
                <input
                    className="inputAdd"
                    placeholder="Nhập tên khách hàng"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="rowTT">
                <p className="totalAdd">SĐT khách hàng:</p>
                <input
                    className="inputAdd"
                    placeholder="Nhập số điện thoại"
                    value={userSDT}
                    onChange={(e) => setUserSDT(e.target.value)}
                />
            </div>

            <div className='btns btnAdd'>
                <button onClick={handleClickAddUser} className='btn btnGreen'>Thêm</button>
            </div>
            <div onClick={() => props.setIsShowAdd(false)} className="iconClose">
                <IconClose />
            </div>
        </div >
    )
}

export default AddUser;