import React, { useEffect, useState } from "react";
import Search from "../Search";
import './ThanhToan.css';

const ListSp = (props) => {

    const [isChecked, setIsChecked] = useState(true);
    const [point, setPoint] = useState(props.point);
    const [selectItem, setSelectItem] = useState({});
    const [data, setData] = useState([]);
    const listsp = [];

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            setPoint(0);
        } else {
            setPoint(props.point);
        }
    };

    let sumPrice = 0;

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    useEffect(() => {
        listsp.push(selectItem);
        listsp?.map(item => {
            sumPrice += (item.price * item.quantity)
        })
        setData(listsp);
    }, [selectItem])

    return (
        <div id='list'>
            <div className="ListSp">
                <div className='TextHeader'>Danh sách sản phẩm</div>
                <Search setData={setSelectItem} data={props.data} />
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
                        {data?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id_product}</td>
                                <td>{item.name_product}</td>
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
                <div className="rowTT rowBuild" >
                    <p className="total1" >Dùng điểm:</p>
                    <input
                        className="checkBox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Tổng tiền sản phẩm:</p>
                    <p>{sumPrice} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Số điểm:</p>
                    <p>{point || 0} đ</p>
                </div>

                <div className="rowTT rowBuild" >
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