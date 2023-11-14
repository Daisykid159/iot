import React from "react";
import Search from "../Search";
import './qldv.css';

const ListDV = (props) => {

    return (
        <div id='listDV'>
            <div className='TextHeader'>QUẢN LÝ DỊCH VỤ</div>
            <Search />
            <div className='textHeader'>Danh sách dịch vụ</div>
            <table>
                <thead>
                    <th className='stt'>STT</th>
                    <th className='nameDV'>Tên dịch vụ</th>
                    <th className='gia'>Giá</th>
                    <th className='time'>Thời gian</th>
                    <th className='sua'></th>
                    <th className='xoa'></th>
                    <th className='chiTiet'></th>
                </thead>
                <tbody>
                    {props.data?.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td onClick={() => props.handleItemClick(item)}>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.time}</td>
                            <td>Sửa</td>
                            <td onClick={() => props.handleDeleteClick(item)}>Xoá</td>
                            <td onClick={() => props.handleItemClick(item)}>Chi tiết</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div>Thêm dịch vụ</div>

        </div>
    );
}

export default ListDV;