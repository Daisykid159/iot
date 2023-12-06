import React, { useState } from 'react';
import IconBack from '~/Icon/IconBack';
import './thongkemh.css';
import ChiTietHD from '~/pages/ThongKe/ThongKeUser/ChiTietHD';

function ChiTietUserListBuyMH(props) {

    const data = [
        {
            idUser: 1,
            idBill: 1,
            nameUser: "Vu Van Dung",
            soLuongDaMua: "20",
            ngayMuaHang: '10/22/2022'
        }
    ]

    const [showBill, setShowBill] = useState(false)
    const [billSelect, setBillSelect] = useState(null)
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);
    const [selectedDateTo, setSelectedDateTo] = useState(null);

    const clickBackUserListBuyMH = () => {
        setShowBill(false)
        setBillSelect(null)
    }

    const clickBillSelect = (item) => {
        setShowBill(true)
        setBillSelect(item)
    }
    const handleDateFrom = date => {
        setSelectedDateFrom(date);
    };

    const handleDateTo = date => {
        setSelectedDateTo(date)
    }

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    return (
        <div id='ChiTietUserListBuyMH'>
            {!showBill ? (<div>
                <div className="iconBack" onClick={() => props.clickBackListMH()} >
                    <IconBack />
                </div>

                <div className='textThongKeKH' >Thống kê sản phẩm</div>
                <div className='textThongKeKH tenKH' >Tên sản phẩm: {props.item.product_name}</div>

                <div>
                    <table>
                        <thead>
                        <th className='stt'>STT</th>
                        <th className='nameDV'>Người mua hàng</th>
                        <th className='nameDV'>Ngày mua</th>
                        <th className='gia'>Số lượng đã mua</th>
                        </thead>
                        <tbody>
                        {data?.map((item, index) => (
                            <tr onClick={() => clickBillSelect(item)}>
                                <td>{index + 1}</td>
                                <td>{item.nameUser}</td>
                                <td>{item.ngayMuaHang}</td>
                                <td>{formatNumberWithCommas(item.soLuongDaMua)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>) : (<ChiTietHD clickBackUser={clickBackUserListBuyMH} bill={billSelect}/>)}
        </div>
    )
}

export default ChiTietUserListBuyMH;