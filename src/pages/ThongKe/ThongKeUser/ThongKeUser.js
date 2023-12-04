import React, { useState } from "react";
import IconBack from "~/Icon/IconBack";
import IconSearch from "~/Icon/IconSearch";
import ChiTietHD from "./ChiTietHD";
import './thongkeuser.css';

function ThongKeUser(props) {

    /* Bkav Dungvvd: Call api load list bill theo id, item*/
    const data = [
        {
            id: 1,
            time: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 2,
            time: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 3,
            time: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 4,
            time: "29/02/2022",
            total: 12831293,
            sddd: 12123321,
            sddc: 123214,
        },
        {
            id: 5,
            time: "29/02/2022",
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

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    return (
        <div id="ThongKeUser">
            {!showTKCTHD ?
                (<div>
                    <div className="iconBack" onClick={() => props.clickBackList()} >
                        <IconBack />
                    </div>
                    <div className='textThongKeKH' >Thống kê chi tiết khách hàng</div>
                    <div className='textThongKeKH tenKH' >{props.item.name}</div>

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
                            <p>Số điểm đã được dùng</p>
                            <p>{formatNumberWithCommas(totalSDDD)} điểm</p>
                        </div>
                    </div>

                    <div className='searchSDT search'>
                        <p className='textSearch' >Tìm kiếm theo ngày mua hàng:</p>
                        <div className='inputSearch'>
                            <input type='text' className='inputS' />
                            <div className='inputIcon'>
                                <IconSearch />
                            </div>
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
                                        <td>{item.time}</td>
                                        <td>{formatNumberWithCommas(item.total)} vnđ</td>
                                        <td>{formatNumberWithCommas(item.sddd)} điểm</td>
                                        <td>{formatNumberWithCommas(item.sddc)} điểm</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>) :
                (<ChiTietHD clickBackUser={clickBackUser} />)
            }
        </div>
    )
}

export default ThongKeUser;