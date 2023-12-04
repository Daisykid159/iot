import React, { useState } from 'react';
import IconSearch from '~/Icon/IconSearch';
import ChiTietUserListBuyMH from './ChiTietUserListBuyMH';
import './thongkemh.css';

function ThongKeListMh(props) {

    const data = [
        {
            id_product: 1,
            name_product: "baansd jasd",
            sldb: 1000,
            slcl: 2,
        },
    ]

    const [showCTLUMH, setShowCTLUMH] = useState(false)

    const clickBackListMH = (item) => {
        setShowCTLUMH(false)
    }

    const formatNumberWithCommas = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
    };

    return (
        <div id='ThongKeListMh'>
            {!showCTLUMH ? (<div>
                <div className='textThongKeKH' >Thống kê sản phẩm</div>

                <div className='searchTen search'>
                    <p className='textSearch' >Tìm kiếm từ ngày</p>
                    <div className='inputSearch'>
                        <input type='text' className='inputS' />
                    </div>
                    <p className='textSearch' > đến ngày</p>
                    <div className='inputSearch'>
                        <input type='text' className='inputS' />
                    </div>
                    <p>Tìm kiếm</p>
                </div>

                <div className='searchTen search'>
                    <p className='textSearch' >Tìm kiếm theo tên sản phẩm</p>
                    <div className='inputSearch'>
                        <input type='text' className='inputS' />
                        <div className='inputIcon'>
                            <IconSearch />
                        </div>
                    </div>
                </div>

                <div className='searchTen search'>
                    <p className='textSearch' >Tìm kiếm theo mã sản phẩm</p>
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
                            <th className='idsp'>ID sản phẩm</th>
                            <th className='nameDV'>Tên sản phẩm</th>
                            <th className='gia'>Số lượng đã bán</th>
                            <th className='sua'>Số lượng còn lại</th>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => (
                                <tr onClick={() => setShowCTLUMH(true)} >
                                    <td>{index + 1}</td>
                                    <td>{item.id_product}</td>
                                    <td>{item.name_product}</td>
                                    <td>{formatNumberWithCommas(item.sldb)}</td>
                                    <td>{formatNumberWithCommas(item.slcl)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>) : (<ChiTietUserListBuyMH clickBackListMH={clickBackListMH} />)}
        </div>
    )
}

export default ThongKeListMh;