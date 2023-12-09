import React, { useEffect, useState } from 'react';
import IconBack from '~/Icon/IconBack';
import './thongkemh.css';
import ChiTietHD from '~/pages/ThongKe/ThongKeUser/ChiTietHD';
import { getListUserBuyProduct } from '~/API';
import moment from 'moment/moment';
import { formatNumberWithCommas } from '~/App';

function ChiTietUserListBuyMH(props) {

    const [showBill, setShowBill] = useState(false)
    const [billSelect, setBillSelect] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        getListUserBuyMH();
    }, [])

    const getListUserBuyMH = async () => {
        try {
            const response = await getListUserBuyProduct(props.item.id_product);
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API getListUserBuyMH', error);
        }
    }

    const clickBackUserListBuyMH = () => {
        setShowBill(false)
        setBillSelect(null)
    }

    const clickBillSelect = (item) => {
        setShowBill(true)
        setBillSelect(item)
    }

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
                                <td>{(item.username === "Guest") ? "Không có thông tin khách hàng" : item.username }</td>
                                <td>{moment(item.sale_date).format('YYYY-MM-DD')}</td>
                                <td>{formatNumberWithCommas(item.quantity_product)}</td>
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