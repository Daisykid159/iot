import React from "react";
import './ThanhToan.css'

const User = (props) => {

    return (
        <div className="user">
            <div className="TextHeader" >Thông tin khách hàng</div>
            <div className="rowTT" >
                <p className="total" >ID khách hàng:</p>
                <p>{props.user.uid}</p>
            </div>
            <div className="rowTT" >
                <p className="total" >Họ và tên:</p>
                <p>{props.user.name}</p>
            </div>
            <div className="rowTT" >
                <p className="total" >Số điện thoại:</p>
                <p>{props.user.sdt}</p>
            </div>
            <div className="rowTT" >
                <p className="total" >Số điểm hiện có:</p>
                <p>{props.user.point}</p>
            </div>
        </div>
    )
}

export default User;