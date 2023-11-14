import React from "react";
import './qldv.css';

const DetailDV = (props) => {

    const a = [];
    props.item.dsNVThucHien?.map((item, indext) => {
        a.push(item.fullName);
        return item;
    })

    return (
        <div className="detailDV">
            <div className="TextHeader">CHI TIẾT DỊCH VỤ</div>
            <div onClick={() => props.goBack()}>X</div>
            <div>
                <span>Tên dịch vụ: </span>
                <span>{props.item.name}</span>
            </div>
            <div>
                <span>Giá dịch vụ: </span>
                <span>{props.item.time}</span>
            </div>
            <div>
                <span>Thời gian thực hiện dịch vụ: </span>
                <span>{props.item.price}</span>
            </div>
            <div>
                <span>Mô tả dịch vụ: </span>
                <span>{props.item.describe}</span>
            </div>
            <div>
                <span>Nhân viên thực hiện: </span>
                <span>{a.join(', ')}</span>
            </div>
        </div>
    )
}

export default DetailDV;