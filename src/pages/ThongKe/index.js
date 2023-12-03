import React, { useState } from 'react';
import './ThongKe.css';
import ThongKeListMh from './ThongKeMH';
import ThongKeUserList from './ThongKeUser';

function ThongKe(params) {
    const [showSP, setShowSP] = useState(true);

    return (
        <div id='ThongKe'>
            <div className='textThongKe'>Thống kê</div>
            <div className='listThongKe'>
                <div className='itemThongKe green white'>
                    <p>Tổng doanh số trong ngày</p>
                    <p>0 đ</p>
                </div>

                <div className='itemThongKe red white'>
                    <p>Số điểm đã được dùng trong ngày</p>
                    <p>0 đ</p>
                </div>

                <div className='itemThongKe yellow white'>
                    <p>Số điểm đã cộng cho khách hàng ngày</p>
                    <p>0 đ</p>
                </div>
            </div>
            <div className='listSelect'>
                <div className='itemSelect borderRight'
                    style={{ backgroundColor: showSP ? '#007bff' : '#007bff87' }}
                    onClick={() => {
                        setShowSP(true)
                    }}>
                    Thống kê sản phẩm
                </div>

                <div className='itemSelect'
                    style={{ backgroundColor: !showSP ? '#007bff' : '#007bff87' }}
                    onClick={() => {
                        setShowSP(false)
                    }}>
                    Thống kê khách hàng
                </div>
            </div>
            {showSP ?
                (<ThongKeListMh />) :
                (<ThongKeUserList />)
            }
        </div>
    )
}

export default ThongKe;