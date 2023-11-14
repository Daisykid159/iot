import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ListSp from './ListSp';
import User from './User';

const ThanhToan = (params) => {

    const fakeData = [
        {
            id: 1,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
        {
            id: 2,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
        {
            id: 3,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
        {
            id: 4,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
        {
            id: 5,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
        {
            id: 6,
            name: 'Bánh mì',
            price: 10000,
            quantity: 10,
        },
    ]

    const fakeData1 = {
        uid: 1,
        name: "lê thị thoa",
        sdt: '09123821323',
        point: 100,
    }

    return (
        <div>
            <Header />
            <User user={fakeData1} />
            <ListSp data={fakeData} point={fakeData1.point} />
            <Footer />
        </div>
    )
}

export default ThanhToan;