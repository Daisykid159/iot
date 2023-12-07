import React, { useEffect, useState } from 'react';
import IconSearch from '~/Icon/IconSearch';
import ChiTietUserListBuyMH from './ChiTietUserListBuyMH';
import './thongkemh.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { searchMHByDate, searchMHByID, searchMHByName } from '~/API';
import { formatNumberWithCommas } from '~/App';

function ThongKeListMh(props) {

    let optionSearch = [
        'Tìm kiếm theo thời gian',
        'Tìm kiếm theo tên',
        'Tìm kiếm theo số ID',
    ]

    const [showCTLUMH, setShowCTLUMH] = useState(false)
    const [mhSelect, setMhSelect] = useState(null)
    const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
    const [selectedDateTo, setSelectedDateTo] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState('');
    const [showSearch, setShowSearch] = useState(1)
    const [nameMH, setNameMH] = useState('');
    const [IDMH, setIDMH] = useState();
    const [data, setData] = useState(null)

    useEffect(() => {
        searchTheoTime()
    }, [])

    const clickBackListMH = () => {
        setShowCTLUMH(false)
    }

    const searchTheoTime = async () => {
        if(!selectedDateFrom || !selectedDateTo) {
            alert("Vui lòng chọn ngày bắt đầu và ngày kết thúc!")
        }

        try {
            const response = await searchMHByDate(moment(selectedDateFrom).format('YYYY-MM-DD'), moment(selectedDateTo).format('YYYY-MM-DD'));
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoTimeMH', error);
        }
    }

    const searchTheoTen = async () => {
        if(!nameMH) {
            alert("Vui lòng nhập tên tìm!")
        }

        try {
            const response = await searchMHByName(nameMH);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoTenMH', error);
        }
    }

    const searchTheoID = async () => {
        if(!IDMH) {
            alert("Vui lòng nhập id sản phẩm cần tìm!")
        }

        try {
            const response = await searchMHByID(IDMH);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API searchTheoTenMH', error);
        }
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'Tìm kiếm theo thời gian') setShowSearch(1)
        else if (event.target.value === 'Tìm kiếm theo tên') setShowSearch(2)
        else if (event.target.value === 'Tìm kiếm theo số ID') setShowSearch(3)
        else setShowSearch(null)
    };

    const handleDateFrom = date => {
        setSelectedDateFrom(date);
    };

    const handleDateTo = date => {
        setSelectedDateTo(date)
    }

    const clickSPSelect = (item) => {
        setMhSelect(item)
        setShowCTLUMH(true)
    }

    const handleInputChangeNameMH = (e) => {
        setNameMH(e.target.value);
    }

    const handleInputChangeIDMH = (e) => {
        setIDMH(e.target.value)
    }

    let totalprice = 0
    let totalQuantity = 0

    data?.map(item => {
        totalprice += item.price_sold
        totalQuantity += item.quantity_sold
    })

    return (
        <div id='ThongKeListMh'>
            {!showCTLUMH ? (<div>
                <div className='textThongKeKH' >Quản lý sản phẩm</div>

                <div className='listThongKe1'>
                    <div className='itemThongKe1 green white'>
                        <p>Tổng số doanh thu</p>
                        <p>{formatNumberWithCommas(totalprice) || 0} vnđ</p>
                    </div>

                    <div className='itemThongKe1 red white'>
                        <p>Tổng số lượng sản phẩm đã bán</p>
                        <p>{formatNumberWithCommas(totalQuantity) || 0} sản phẩm</p>
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
                    <p className='textSearch'>Tìm kiếm theo tên</p>
                    <div className='inputSearch'>
                        <input type='text' className='inputS' value={nameMH} onChange={handleInputChangeNameMH} />
                        <div className='inputIcon' onClick={() => searchTheoTen()}>
                            <IconSearch />
                        </div>
                    </div>
                </div>)}

                {showSearch === 3 && (<div className='searchSDT search'>
                    <p className='textSearch'>Tìm kiếm theo ID</p>
                    <div className='inputSearch'>
                        <input type='text' className='inputS' value={IDMH} onChange={handleInputChangeIDMH} />
                        <div className='inputIcon' onClick={() => searchTheoID()}>
                            <IconSearch />
                        </div>
                    </div>
                </div>)}

                <div>
                    <table>
                        <thead>
                            <th className='stt'>STT</th>
                            <th className='idsp'>ID sản phẩm</th>
                            <th className='nameDV1'>Tên sản phẩm</th>
                            <th className='nameDV1'>Doang số</th>
                            <th className='gia1'>Số lượng đã bán</th>
                            <th className='gia1'>Số lượng còn lại</th>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => (
                                <tr onClick={() => clickSPSelect(item)} >
                                    <td>{index + 1}</td>
                                    <td>{item.id_product}</td>
                                    <td>{item.product_name}</td>
                                    <td>{formatNumberWithCommas(item.price_sold)}</td>
                                    <td>{formatNumberWithCommas(item.quantity_sold)}</td>
                                    <td>{formatNumberWithCommas(item.quantity_remain)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>) : (<ChiTietUserListBuyMH clickBackListMH={clickBackListMH} item={mhSelect} />)}
        </div>
    )
}

export default ThongKeListMh;