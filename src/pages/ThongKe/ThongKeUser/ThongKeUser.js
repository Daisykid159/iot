import React, { useEffect, useState } from 'react';
import IconBack from "~/Icon/IconBack";
import ChiTietHD from "./ChiTietHD";
import './thongkeuser.css';
import 'react-datepicker/dist/react-datepicker.css';
import { formatNumberWithCommas } from '~/App';
import { searchUserByDateAndIdUser, searchUserByIdUser } from '~/API';

function ThongKeUser(props) {

    const [billSelect, setBillSelect] = useState(null)
    const [showTKCTHD, setShowTKCTHD] = useState(false)
    const [data, setData] = useState(null);

    useEffect(() => {
        getUserById()
    }, []);

    const getUserByTimeAndId = async () => {
        try {
            const response = await searchUserByDateAndIdUser(props.item.id, props.dataFrom, props.dataTo);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API getUserByTimeAndId', error);
        }
    }

    const getUserById = async () => {
        try {
            console.log(props.item.id);
            const response = await searchUserByIdUser(props.item.id);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API getUserByTimeAndId', error);
        }
    }
    const clickBill = (item) => {
        setBillSelect(item)
        setShowTKCTHD(true)
    }

    const clickBackUser = (item) => {
        setBillSelect(null)
        setShowTKCTHD(false)
    }

    let totalHD = data?.length
    let totalPrice = 0
    let totalSDDD = 0

    data?.map(item => {
        totalPrice += item.totalPrice
        totalSDDD += item.usedPoint
    })

    return (
        <div id="ThongKeUser">
            {!showTKCTHD ?
                (<div>
                    <div className="iconBack" onClick={() => props.clickBackList()} >
                        <IconBack />
                    </div>
                    <div className='textThongKeKH' >Chi tiết khách hàng</div>
                    <div className='textThongKeKH tenKH' >Tên khách hàng: {props.item.name}</div>

                    <div className='listThongKe'>
                        <div className='itemThongKe green white'>
                            <p>Tổng số đơn hàng</p>
                            <p>{totalHD} đơn</p>
                        </div>

                        <div className='itemThongKe red white'>
                            <p>Tổng chi tiêu</p>
                            <p>{formatNumberWithCommas(totalPrice) || 0} vnđ</p>
                        </div>

                        <div className='itemThongKe yellow white'>
                            <p>Tổng số điểm đã được dùng</p>
                            <p>{formatNumberWithCommas(totalSDDD) || 0} điểm</p>
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
                                        <td>{item.createdDate}</td>
                                        <td>{formatNumberWithCommas(item.totalPrice)} vnđ</td>
                                        <td>{formatNumberWithCommas(item.usedPoint)} điểm</td>
                                        <td>{formatNumberWithCommas(item.savedPoint)} điểm</td>
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