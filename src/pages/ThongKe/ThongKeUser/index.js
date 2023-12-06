import React, { useEffect, useState } from 'react';
import './thongkeuser.css';
import IconSearch from '~/Icon/IconSearch';
import ThongKeUser from '~/pages/ThongKe/ThongKeUser/ThongKeUser';
import DatePicker from 'react-datepicker';
import { getAllUsers, searchUserByDate, searchUserByName, searchUserByPhone } from '~/API';
import { formatNumberWithCommas } from '~/App';
import moment from 'moment';

function ThongKeUserList(props) {
    const listUser = [
        {
            id: 1,
            name: "Vũ Văn Dũng",
            phone: "0912359123",
            point: 124567,
            uid: null,
        },
        {
            id: 2,
            name: "Vũ Văn Dũng",
            phone: "0912359123",
            point: 124567,
            uid: null,
        },
        {
            id: 3,
            name: "Vũ Văn Dũng",
            phone: "0912359123",
            point: 124567,
            uid: null,
        },
        {
            id: 4,
            name: "Vũ Văn Dũng",
            phone: "0912359123",
            point: 124567,
            uid: null,
        }
    ]

    let optionSearch = [
        'Tìm kiếm theo thời gian',
        'Tìm kiếm theo tên',
        'Tìm kiếm theo số điện thoại',
    ]

    const [itemSelect, setItemSelect] = useState(null)
    const [showTKUser, setShowTKUser] = useState(false)
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);
    const [selectedDateTo, setSelectedDateTo] = useState(null);
    const [nameUser, setNameUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showSearch, setShowSearch] = useState(1)
    const [data, setData] = useState(null)

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        try {
            const response = await getAllUsers();
            const result = response.data;
            setData(result);
        } catch (error) {
            setData(listUser);
            console.error('Lỗi trong quá trình gửi yêu cầu API getAllUser', error);
        }
    }

    const searchTheoTime = async () => {
        try {
            const response = await searchUserByDate(moment(selectedDateFrom).format('YYYY-MM-DD'), moment(selectedDateTo).format('YYYY-MM-DD'));
            const result = response.data;
            setData(result);
        } catch (error) {
            setData(listUser);
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoTime', error);
        }
    }

    const searchTheoTen = async () => {
        try {
            const response = await searchUserByName(nameUser);
            const result = response.data;
            setData(result);
        } catch (error) {
            setData(listUser);
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoTen', error);
        }
    }

    const searchTheoPhone = async () => {
        try {
            const response = await searchUserByPhone(phoneUser);
            const result = response.data;
            setData(result);
        } catch (error) {
            setData(listUser);
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoPhone', error);
        }
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'Tìm kiếm theo thời gian') setShowSearch(1)
        else if (event.target.value === 'Tìm kiếm theo tên') setShowSearch(2)
        else if (event.target.value === 'Tìm kiếm theo số điện thoại') setShowSearch(3)
        else setShowSearch(null)
    };

    const clickItem = (item) => {
        setItemSelect(item)
        setShowTKUser(true)
    }

    const clickBack = () => {
        setItemSelect(null)
        setShowTKUser(false)
    }

    const handleDateFrom = date => {
        setSelectedDateFrom(date);
    };

    const handleDateTo = date => {
        setSelectedDateTo(date)
    }

    const handleInputChangeNameUser = (e) => {
        setNameUser(e.target.value);
    }

    const handleInputChangePhoneUser = (e) => {
        setPhoneUser(e.target.value)
    }

    return (
        <div id='ThongKe'>
            {!showTKUser ?
                (<div>
                    <div className='textThongKeKH'>Thống kê khách hàng</div>

                    <div className='listThongKe'>
                        <div className='itemThongKe green white'>
                            <p>Tổng số khách hàng mua</p>
                            <p>{data?.length || 0}</p>
                        </div>

                        <div className='itemThongKe red white'>
                            <p>Tổng số điểm đã được dùng</p>
                            <p>0 điểm</p>
                        </div>

                        <div className='itemThongKe yellow white'>
                            <p>Tổng số điểm đã cộng</p>
                            <p>0 điểm</p>
                        </div>
                    </div>

                    <div className="rowTT searchTen search">
                        <label
                            className="totalAdd"
                            htmlFor="dropdown"
                        >Chọn loại tìm kiếm:</label>
                        <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="selectInput selectSearch"
                        >
                            <option value="Tìm kiếm theo thời gian" disabled>Chọn loại tìm kiếm</option>
                            {optionSearch.map((option, index) => (
                                <option className="option" key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {showSearch === 1 && (<div className='searchTen search mg20'>
                        <p className='textSearch1'>Tìm kiếm từ ngày:</p>
                        <DatePicker
                            selected={selectedDateFrom}
                            onChange={handleDateFrom}
                            dateFormat='dd/MM/yyyy'  // Định dạng ngày tháng năm
                            placeholderText='Chọn ngày'
                        />
                        <p className='textSearch2'> đến ngày</p>
                        <DatePicker
                            selected={selectedDateTo}
                            onChange={handleDateTo}
                            minDate={selectedDateFrom}
                            dateFormat='dd/MM/yyyy'  // Định dạng ngày tháng năm
                            placeholderText='Chọn ngày'
                        />
                        <p className='search1' onClick={searchTheoTime}>Tìm kiếm</p>
                    </div>)}

                    {showSearch === 2 && (<div className='searchTen search'>
                        <p className='textSearch'>Tìm kiếm theo tên:</p>
                        <div className='inputSearch'>
                            <input type='text' className='inputS' value={nameUser} onChange={handleInputChangeNameUser} />
                            <div className='inputIcon' onClick={() => searchTheoTen()}>
                                <IconSearch />
                            </div>
                        </div>
                    </div>)}

                    {showSearch === 3 && (<div className='searchSDT search'>
                        <p className='textSearch'>Tìm kiếm theo số điện thoại:</p>
                        <div className='inputSearch'>
                            <input type='text' className='inputS' value={phoneUser} onChange={handleInputChangePhoneUser} />
                            <div className='inputIcon' onClick={() => searchTheoPhone()}>
                                <IconSearch />
                            </div>
                        </div>
                    </div>)}

                    <div>
                        <table>
                            <thead>
                                <th className='stt'>STT</th>
                                <th className='nameKH'>Tên khách hàng</th>
                                <th className='sdtKH'>SĐT</th>
                                <th className='countKH'>Số điểm hiện tại</th>
                            </thead>
                            <tbody>
                                {data?.map((item, index) => (
                                    <tr onClick={() => clickItem(item)}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{formatNumberWithCommas(item.point) || 0} điểm</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>) : (<ThongKeUser clickBackList={clickBack} item={itemSelect} />)}
        </div>
    )
}

export default ThongKeUserList;