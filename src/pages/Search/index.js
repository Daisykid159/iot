import React, { useState } from 'react';
import './search.css';

const Search = (props) => {
    const [productId, setProductId] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleClickAdd = () => {
        props.setProductId(productId);
        props.setProductQuantity(productQuantity);
        props.setUpDate(true);
        setProductId('');
        setProductQuantity('');
    };

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
