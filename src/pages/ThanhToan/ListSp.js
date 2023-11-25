import React, { useEffect, useState } from "react";
import Search from "../Search";
import './ThanhToan.css';
import XoaSp from '~/pages/ThanhToan/XoaSp';
import XacNhanThanhToan from '~/pages/ThanhToan/XacNhanThanhToan';
import { summitThanhToan, summitThanhToanNotUser } from '~/API';
import user from '~/pages/ThanhToan/User';
import moment from 'moment';

const listsp = [];

const ListSp = (props) => {

    const [isChecked, setIsChecked] = useState(false);
    const [point, setPoint] = useState(props.user?.point || 0);
    const [productId, setProductId] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [sumPrice, setSumPrice] = useState(0)
    const [load, setLoad] = useState(false);
    const [update, setUpDate] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isXacNhanThanhToan, setIsXacNhanThanhToan] = useState(false);

    const handleCheckboxChange = () => {
        if(props.user?.point && listsp.length) setIsChecked(!isChecked);
    };

    const getCurrentDay = () => {
        const today = new Date();
        const formattedDay = moment(today).format('YYYY-MM-DD');
        return formattedDay;
    };

    useEffect(() => {
        if(listsp.length){
            if (isChecked) {
                setPoint(props.user?.point || 0);
                setSumPrice(sumPrice - (props.user?.point || 0));

            } else {
                setPoint(0);
                setSumPrice(sumPrice + (props.user?.point || 0));
            }
        }
    }, [isChecked])

    useEffect(() => {
        setPoint(props.user?.point || 0);
    }, [user])

    const handleCancel = () => {
        setConfirmationDialogOpen(false);
        setIsXacNhanThanhToan(false);
    };

    const handleConfirmDelete = async () => {
        try {
            listsp?.map((item, index) => {
                if (item.id_product === itemToDelete.id_product) {
                    const priceTru = item.price * item.quantity;
                    listsp.splice(index, 1);
                    setSumPrice(sumPrice - priceTru);
                }
            })
            setConfirmationDialogOpen(false);
            setItemToDelete(null)
        } catch (error) {
            console.error('Lỗi trong quá trình xóa phần tử từ API', error);
        }
    };


    const handleClickXoa = (item) => {
        setConfirmationDialogOpen(true);
        setItemToDelete(item);
    };

    const handleSumit = async () => {
        try {
            const dayTT = getCurrentDay()
            console.log(dayTT, typeof dayTT);

            if(props.user?.id) {
                console.log(props.user);
                const response = await summitThanhToan(dayTT, props.user.id, sumPrice, isChecked, listsp);
            } else {
                console.log(props.user);
                const response = await summitThanhToanNotUser(dayTT, sumPrice, listsp);
            }
            alert('Bạn đã thanh toán thành công!');
            setSumPrice(0);
            setPoint(0);
            setIsChecked(false)
            listsp.splice(0, listsp.length);
            props.setUser(null);
            setIsXacNhanThanhToan(false)
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API thanh toan', error);
        }
    }

    const summit = () => {
        setIsXacNhanThanhToan(true);
    }

    let tmpSumPrice = 0;

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    useEffect(() => {
        if (update) {
            const tmpProductQuantity = parseInt(productQuantity, 10);
            const itemFoundData = props.data.find(item => item.id_product === parseInt(productId, 10));
            const itemFoundListSp = listsp.find(item => item.id_product === parseInt(productId, 10));
            if (itemFoundData && itemFoundData.quantity >= tmpProductQuantity) {
                if (itemFoundListSp) {
                    if (itemFoundListSp.quantity + tmpProductQuantity <= itemFoundData.quantity) {
                        tmpSumPrice += itemFoundData.price * tmpProductQuantity;
                        const itemSelected = {
                            ...itemFoundData,
                            quantity: tmpProductQuantity + itemFoundListSp.quantity
                        };
                        listsp?.map((item, index) => {
                            if (item.id_product === itemFoundListSp.id_product) {
                                listsp.splice(index, 1, itemSelected);
                            }
                        })
                    } else {
                        alert(`Sản phẩm đã có trong hóa đơn và số lượng sản phẩm cộng thêm không đủ!`);
                    }
                } else {
                    // Item đã có trong listsp và số lượng đủ
                    const itemSelected = {
                        ...itemFoundData,
                        quantity: tmpProductQuantity
                    };

                    tmpSumPrice += itemFoundData.price * tmpProductQuantity;

                    listsp.push(itemSelected);
                }
            } else {
                alert(`Id sản phẩm không đúng hoặc số lượng sản phẩm không đủ!`);
            }
            setSumPrice(tmpSumPrice + sumPrice);
            setLoad(!load);
        }
        setUpDate(false);
    }, [update]);

    return (
        <div id='list'>
            <div className="ListSp">
                <div className='TextHeader'>Danh sách sản phẩm</div>
                <Search
                    data={props.data}
                    setProductId={setProductId}
                    setProductQuantity={setProductQuantity}
                    setUpDate={setUpDate}
                />
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
                        {listsp?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id_product}</td>
                                <td>{item.name_product}</td>
                                <td>{formatNumberWithCommas(item.price)} đ</td>
                                <td>{item.quantity}</td>
                                <td>{formatNumberWithCommas(item.quantity * item.price) || 0} đ</td>
                                <td onClick={() => handleClickXoa(item)} className='delete' >Xoá</td>
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
                    <p>{sumPrice + point} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Số điểm:</p>
                    <p>- {point || 0} đ</p>
                </div>

                <div className="rowTT rowBuild" >
                    <p className="total1" >Tổng thanh toán:</p>
                    <p>{sumPrice} đ</p>
                </div>
            </div>

            <div
                className="sumit"
                onClick={summit}
            >Thanh toán</div>

            {isConfirmationDialogOpen ? (<div id='xoa'>
                <XoaSp
                    isOpen={isConfirmationDialogOpen}
                    onCancel={handleCancel}
                    onConfirm={handleConfirmDelete}
                />
            </div>) : null}

            {isXacNhanThanhToan ? (<div id='xoa'>
                <XacNhanThanhToan
                    isOpen={isXacNhanThanhToan}
                    onCancel={handleCancel}
                    onConfirm={handleSumit}
                />
            </div>) : null}
        </div>
    );
}

export default ListSp;