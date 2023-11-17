import { useEffect, useState } from 'react';
import './ThanhToan.css';
import IconClose from "~/Icon/IconClose";
import { addUser, getlistRfid } from '~/API';

function AddUser(props) {

    const [userName, setUserName] = useState('');
    const [userSDT, setUserSDT] = useState('');
    const [rfId, setRfId] = useState('');
    const [listRfid, setListRfid] = useState([]);

    const [selectedOption, setSelectedOption] = useState('');

    const getListRfid = async () => {
        try {
            const response = await getlistRfid();
            const result = response.data;
            setListRfid(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API user', error);
        }
    }

    const AddUser = async () => {
        try {
            const response = await addUser(userName, userSDT, rfId);
            const result = response.data;
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API user', error);
        }
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setRfId(event.target.value);
    };

    const handleClickAddUser = () => {
        AddUser();
        alert(`Thêm thành công\nTên khách hàng: ${userName}\nSĐT Khách hàng: ${userSDT}\n ID thẻ: ${rfId}`);
        setUserName('');
        setUserSDT('');
        setRfId('')
        props.setIsShowAdd(false)
    };

    useEffect(() => {
        getListRfid();
    }, [])

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

            <div className="rowTT">
                <label
                    className="totalAdd"
                    htmlFor="dropdown"
                >Chọn ID thẻ:</label>
                <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="selectInput"
                >
                    <option value="" disabled>Chọn ID thẻ</option>
                    {listRfid.map((option, index) => (
                        <option key={index} value={option.uid}>
                            {option.uid}
                        </option>
                    ))}
                </select>
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