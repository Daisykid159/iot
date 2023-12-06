import React, { useState } from "react";
import IconBack from "~/Icon/IconBack";
import ChiTietHD from "./ChiTietHD";
import './thongkeuser.css';
import 'react-datepicker/dist/react-datepicker.css';
import { formatNumberWithCommas } from '~/App';

function ThongKeUser(props) {

    /* Call api load list bill theo id, item */
    const data = [
        {
            id: 1,
            ngayMuaHang: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 2,
            ngayMuaHang: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 3,
            ngayMuaHang: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 4,
            ngayMuaHang: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 5,
            ngayMuaHang: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        }
    ]

    let totalHD = data.length
    let totalPrice = 0
    let totalSDDD = 0
    data.map((item) => {
        totalPrice += item.total
        totalSDDD += item.sddd
    })

    const [billSelect, setBillSelect] = useState(null)
    const [showTKCTHD, setShowTKCTHD] = useState(false)

    const clickBill = (item) => {
        setBillSelect(item)
        setShowTKCTHD(true)
    }

    const clickBackUser = (item) => {
        setBillSelect(null)
        setShowTKCTHD(false)
    }

    return (
        <div id="ThongKeUser">
            {!showTKCTHD ?
                (<div>
                    <div className="iconBack" onClick={() => props.clickBackList()} >
                        <IconBack />
                    </div>
                    <div className='textThongKeKH' >Thống kê chi tiết khách hàng</div>
                    <div className='textThongKeKH tenKH' >Tên khách hàng: {props.item.name}</div>

                    <div className='listThongKe'>
                        <div className='itemThongKe green white'>
                            <p>Tổng số đơn hàng</p>
                            <p>{totalHD} đơn</p>
                        </div>

                        <div className='itemThongKe red white'>
                            <p>Tổng chi tiêu</p>
                            <p>{formatNumberWithCommas(totalPrice)} vnđ</p>
                        </div>

                        <div className='itemThongKe yellow white'>
                            <p>Tổng số điểm đã được dùng</p>
                            <p>{formatNumberWithCommas(totalSDDD)} điểm</p>
                        </div>
                    </div>

                    <div>
                        <table>
                            <thead>
                                <th className='stt'>STT</th>
                                <th className='nameKH'>Ngày mua hàng</th>
                                <th className='sdtKH'>Tổng giá trị</th>
                                <th className='countKH'>Số điểm dùng</th>
                                <th className='countKH'>Số điểm cộng</th>
                            </thead>

                            <tbody>
                                {data?.map((item, index) => (
                                    <tr onClick={() => clickBill(item)}>
                                        <td>{index + 1}</td>
                                        <td>{item.ngayMuaHang}</td>
                                        <td>{formatNumberWithCommas(item.total)} vnđ</td>
                                        <td>{formatNumberWithCommas(item.sddd)} điểm</td>
                                        <td>{formatNumberWithCommas(item.sddc)} điểm</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>) :
                (<ChiTietHD clickBackUser={clickBackUser} bill={billSelect}/>)
            }
        </div>
    )
}

export default ThongKeUser;