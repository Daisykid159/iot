import React, { useEffect, useState } from 'react';
import './thongkeuser.css';
import IconSearch from '~/Icon/IconSearch';
import ThongKeUser from '~/pages/ThongKe/ThongKeUser/ThongKeUser';

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

    const [itemSelect, setItemSelect] = useState(null)
    const [showTKUser, setShowTKUser] = useState(false)

    useEffect(() => {
        setShowTKUser(props.showListUser)
    }, [])

    const clickItem = (item) => {
        setItemSelect(item)
        setShowTKUser(true)
    }

    const clickBack = (item) => {
        setItemSelect(null)
        setShowTKUser(false)
    }


    return (
        <div id='ThongKe'>
            {!showTKUser ?
                (<div>
                    <div className='textThongKeKH'>Thống kê khách hàng</div>
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
                                    <tr onClick={() => clickItem(item)}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.SĐT}</td>
                                        <td>{item.count} điểm</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>) : (<ThongKeUser clickBackList={clickBack} item={itemSelect} />)}
        </div>
    )
}

export default ThongKeUserList;