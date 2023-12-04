import React from 'react';
import IconBack from '~/Icon/IconBack';
import './thongkemh.css';

function ChiTietMh(props) {
    return (
        <div id='ChiTietMh'>
            <div className="iconBack" onClick={() => props.clickBackList()} >
                <IconBack />
            </div>
        </div>
    )
}

export default ChiTietMh;