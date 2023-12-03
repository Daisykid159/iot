import React from 'react';
import './thongkeuser.css';
import IconSearch from '~/Icon/IconSearch';
import { click } from '@testing-library/user-event/dist/click';

function ThongKeUserList(props) {
    const listUser = [
        {
            id: 1,
            name: "Vũ Văn Dũng",
            SĐT: "0912359123",
            count: 124567,
        },
        {
            id: 2,
            name: "Vũ Văn Dũng",
            SĐT: "0912359123",
            count: 124567,
        },
        {
            id: 3,
            name: "Vũ Văn Dũng",
            SĐT: "0912359123",
            count: 124567,
        },
        {
            id: 4,
            name: "Vũ Văn Dũng",
            SĐT: "0912359123",
            count: 124567,
        }
    ]

    return (
        <div id='ThongKe'>
            <div className='textThongKeKH' >Thống kê khách hàng</div>
            <div className='searchTen search'>
                <p className='textSearch' >Tìm kiếm theo tên</p>
                <div className='inputSearch'>
                    <input type='text' className='inputS' />
                    <div className='inputIcon'>
                        <IconSearch />
                    </div>
                </div>
            </div>

            <div className='searchSDT search'>
                <p className='textSearch' >Tìm kiếm theo SĐT</p>
                <div className='inputSearch'>
                    <input type='text' className='inputS' />
                    <div className='inputIcon'>
                        <IconSearch />
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <th className='stt'>STT</th>
                        <th className='nameKH'>Tên khách hàng</th>
                        <th className='sdtKH'>SĐT</th>
                        <th className='countKH'>Số điểm hiện tại</th>
                    </thead>
                    <tbody>
                        {listUser?.map((item, index) => (
                            <tr onClick={() => alert(`Click ${index}`)}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.SĐT}</td>
                                <td>{item.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ThongKeUserList;