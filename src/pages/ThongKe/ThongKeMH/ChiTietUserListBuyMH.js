import React from 'react';
import IconBack from '~/Icon/IconBack';
import './thongkemh.css';

function ChiTietUserListBuyMH(props) {
    return (
        <div id='ChiTietUserListBuyMH'>
            <div className="iconBack" onClick={() => props.clickBackListMH()} >
                <IconBack />
            </div>
        </div>
    )
}

export default ChiTietUserListBuyMH;