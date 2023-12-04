import React from "react";
import IconBack from "~/Icon/IconBack";
import './thongkeuser.css';

function ChiTietHD(props) {

    const ChiTietHDUser = {
        listsp: [
            {
                id_product: 1,
                name_product: "baansd jasd",
                price: 1000,
                quantity: 2,
            },
            {
                id_product: 1,
                name_product: "baansd jasd",
                price: 1000,
                quantity: 2,
            },
            {
                id_product: 1,
                name_product: "baansd jasd",
                price: 1000,
                quantity: 2,
            }
        ],
        sumPrice: 10,
        point: 1000,
        isChecked: true,
    }

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    return (
        <div>
            <div className="iconBack" onClick={() => props.clickBackUser()} >
                <IconBack />
            </div>
            <div className='textThongKeKH' >Chi tiết hoá đơn</div>
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
                        {ChiTietHDUser.listsp?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id_product}</td>
                                <td>{item.name_product}</td>
                                <td>{formatNumberWithCommas(item.price)} đ</td>
                                <td>{item.quantity}</td>
                                <td>{formatNumberWithCommas(item.quantity * item.price) || 0} đ</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="tinhtien" >
                <div className="rowTT rowBuild" >
                    <p className="total1" >Dùng điểm:</p>
                    <input
                        className="checkBox"
                        type="checkbox"
                        checked={ChiTietHDUser.isChecked}
                    />
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Tổng tiền sản phẩm:</p>
                    <p>{ChiTietHDUser.sumPrice + ChiTietHDUser.point} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Số điểm:</p>
                    <p>- {ChiTietHDUser.point || 0} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Tổng thanh toán:</p>
                    <p>{ChiTietHDUser.sumPrice} đ</p>
                </div>
            </div>

        </div >
    )
}

export default ChiTietHD;