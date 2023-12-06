import React, { useState } from 'react';
import './ThongKe.css';
import ThongKeListMh from './ThongKeMH';
import ThongKeUserList from './ThongKeUser';

function ThongKe(params) {
    const [showSP, setShowSP] = useState(true);

    return (
        <div id='ThongKe'>

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
                (<ThongKeListMh isShow={showSP} />) :
                (<ThongKeUserList isShow={true} />)
            }
        </div>
    )
}

export default ThongKe;