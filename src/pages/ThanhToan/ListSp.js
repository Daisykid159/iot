import React, { useEffect, useState } from "react";
import Search from "../Search";
import './ThanhToan.css';

const ListSp = (props) => {

    let sumPrice = 0;

    props.data?.map(item => {
        sumPrice += (item.price * item.quantity)
    })

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div id='list'>
            <div className="ListSp">
                <div className='TextHeader'>Danh sách sản phẩm</div>
                <Search data1={props.dataSearch} data={props.data} />
                <table>
                    <thead>
                        <th className='stt'>STT</th>
                        <th className='idsp'>ID sản phẩm</th>
                        <th className='nameDV'>Tên dịch vụ</th>
                        <th className='gia'>Đơn giá</th>
                        <th className='sua'>Số lượng</th>
                        <th className='gia'>Thành tiền</th>
                        <th className='xoa'></th>
                    </thead>
                    <tbody>
                        {props.data?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{formatNumberWithCommas(item.price)} đ</td>
                                <td>{item.quantity}</td>
                                <td>{formatNumberWithCommas(item.quantity * item.price) || 0} đ</td>
                                <td onClick={() => props.handleDeleteClick(item)} className='delete' >Xoá</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="tinhtien" >
                <div className="rowTT" >
                    <p className="total1" >Tổng tiền sản phẩm: </p>
                    <p>{sumPrice} đ</p>
                </div>
                <div className="rowTT" >
                    <p className="total1" >Số điểm:</p>
                    <p>{props.point || 0} đ</p>
                </div>
                <div className="rowTT" >
                    <p className="total1" >Tổng thanh toán:</p>
                    <p>{sumPrice - props.point || 0} đ</p>
                </div>
            </div>

            <div
                className="sumit"
                onClick={props.summit}
            >Thanh toán</div>
        </div>
    );
}

export default ListSp;