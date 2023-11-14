import React, { useState } from 'react';
import './search.css';
import { getAddSp } from '~/API';

const Search = () => {
    const [productId, setProductId] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleClickAdd = () => {
        alert(`Thêm thành công\nID sản phẩm: ${productId}\nSố lượng sản phẩm: ${productQuantity}`);
        getAddsp(productId, productQuantity);
        setProductId('');
        setProductQuantity('');
    };

    const getAddsp = async (productId, productQuantity) => {
        try {
            const response = await getAddSp(productId, productQuantity);
            console.log(response);
            const result = response.data;
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API add', error);
        }
    }

    return (
        <div id='search'>
            <div className='input'>
                <div className='text'>Nhập ID sản phẩm</div>
                <input
                    placeholder={'ID sản phẩm'}
                    className='textInput'
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
            </div>
            <div className='input'>
                <div className='text'>Nhập số lượng sản phẩm</div>
                <input
                    placeholder={'Số lượng sản phẩm'}
                    className='textInput'
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
            </div>
            <div className='addSp' onClick={handleClickAdd}>
                Thêm
            </div>
        </div>
    );
};

export default Search;
