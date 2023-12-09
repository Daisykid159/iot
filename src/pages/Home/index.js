import React from 'react';
import './Home.css';

function Home() {
    return (
        <div id='home'>
            <div className='textHeader'>Các thành viên nhóm 5</div>
            <ul>
                <li className='ThanhVienTrongNhom Lister'>- Vũ Văn Dũng - B20DCCN144 ( Trưởng nhóm )</li>
                <li className='ThanhVienTrongNhom'>- Bùi Minh Vũ - B20DCCN741</li>
                <li className='ThanhVienTrongNhom'>- Quách Thành Công - B20DCCN096</li>
                <li className='ThanhVienTrongNhom'>- Nguyễn Minh Quân - B20DCCN551</li>
                <li className='ThanhVienTrongNhom'>- Trần Văn Trọng - B20DCAT192</li>
                <li className='ThanhVienTrongNhom'>- Đỗ Mạnh Quyền - B20DCCN563</li>
                <li className='ThanhVienTrongNhom'>- Trần Quang Ngọc - B20DCCN474</li>
                <li className='ThanhVienTrongNhom'>- Phạm Quốc Khánh - B20DCCN378</li>
            </ul>
        </div>
    )
}

export default Home;
