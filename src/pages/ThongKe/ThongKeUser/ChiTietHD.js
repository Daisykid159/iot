import React, { useEffect, useState } from 'react';
import IconBack from "~/Icon/IconBack";
import './thongkeuser.css';
import { formatNumberWithCommas } from '~/App';
import { getDetailBillOfUserByIdBill } from '~/API';

function ChiTietHD(props) {

    const [data, setData] = useState(null)

    useEffect(() => {
        getChiTietHoadon()
    }, []);

    const getChiTietHoadon = async () => {
        try {
            const response = await getDetailBillOfUserByIdBill(props.bill.id);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API getChiTietHoadon', error);
        }
    }

    let totalPrice = 0
    data?.map(item => {
        totalPrice += item.price_sold
    })

    return (
        <div>
            <div className="iconBack" onClick={() => props.clickBackUser()} >
                <IconBack />
            </div>
            <div className='textThongKeKH' >Chi tiết hoá đơn</div>

            <div className="rowText" >
                <p>Tên khách hàng:</p>
                <p className='textNameKH' >{props.bill.username}</p>
            </div>

            <div className="rowText" >
                <p>Ngày mua hàng:</p>
                <p className='textNameKH' >{props.bill.createdDate}</p>
            </div>

            <div>
                <table>
                    <thead>
                        <th className='stt'>STT</th>
                        <th className='idsp'>ID sản phẩm</th>
                        <th className='nameDV'>Tên dịch vụ</th>
                        <th className='gia'>Đơn giá</th>
                        <th className='sua'>Số lượng</th>
                        <th className='gia'>Thành tiền</th>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id_product}</td>
                                <td>{item.product_name}</td>
                                <td>{formatNumberWithCommas(item.price_unit)} đ</td>
                                <td>{item.quantity_sold}</td>
                                <td>{formatNumberWithCommas(item.quantity_sold * item.price_unit) || 0} đ</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="tinhtien" >

                <div className="rowTT rowBuild" >
                    <p className="total2" >Tổng tiền sản phẩm:</p>
                    <p>{totalPrice} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total2" >Số điểm:</p>
                    <p>- {props.bill.usedPoint} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total2" >Tổng thanh toán:</p>
                    <p>{props.bill.totalPrice} đ</p>
                </div>
            </div>

        </div >
    )
}

export default ChiTietHD;