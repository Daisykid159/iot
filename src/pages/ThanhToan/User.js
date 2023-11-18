import React, { useState } from "react";
import './ThanhToan.css'
import AddUser from "./AddUser";
import IconAdd from "~/Icon/IconAdd";

const User = (props) => {

    const [isShowAdd, setIsShowAdd] = useState(false);

    return (
        <div className="user">
            {!isShowAdd ? (
                <div>
                    <div className="TextHeader" >Thông tin khách hàng</div>
                    {props.user ? (
                        <div>
                            <div className="rowTT" >
                                <p className="total" >ID khách hàng:</p>
                                <p>{props.user.id}</p>
                            </div>
                            <div className="rowTT" >
                                <p className="total" >Số thẻ khách hàng:</p>
                                <p>{props.user.uid}</p>
                            </div>
                            <div className="rowTT" >
                                <p className="total" >Họ và tên:</p>
                                <p>{props.user.name}</p>
                            </div>
                            <div className="rowTT" >
                                <p className="total" >Số điện thoại:</p>
                                <p>{props.user.phone}</p>
                            </div>
                            <div className="rowTT" >
                                <p className="total" >Số điểm hiện có:</p>
                                <p>{props.user.point || 0}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="btnUpdateDiv">
                            <button className="btnGreen btnUpdate" onClick={props.getuser}>Cập nhật thông tin khách hàng vừa quẹt thẻ</button>
                        </div>
                    )}
                    <div className="iconadd" onClick={() => setIsShowAdd(true)} >
                        <IconAdd />
                    </div>
                </div>
            ) : <AddUser setIsShowAdd={setIsShowAdd} />}
        </div>
    )
}

export default User;