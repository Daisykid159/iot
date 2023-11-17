import React, { useState } from 'react';
import './search.css';
import { getAddSp } from '~/API';

const Search = (props) => {
    const [productId, setProductId] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleClickAdd = () => {
        const tmpListSp = [];
        props.data.map(item => {
            if (item.id_product === parseInt(productId, 10) && item.quantity >= parseInt(productQuantity, 10)) {
                console.log(true);
                tmpListSp.push(item);
            }
        })
        props.setData(tmpListSp);
        alert(`Thêm thành công\nID sản phẩm: ${productId}\nSố lượng sản phẩm: ${productQuantity}`);
    };

    const getAddsp = async (productId, productQuantity) => {
        try {
            const product = props.data1.find((item) => item.id === productId);

            if (product) {
                props.data.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: productQuantity,
                });
            }
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
