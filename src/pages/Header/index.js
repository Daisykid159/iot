import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css';
import Home from '../Home';
import ThanhToan from '../ThanhToan';
import Footer from '~/pages/Footer';
import ThongKe from '../ThongKe';

function Header(props) {
    return (
        <Router>
            <div id='header'>
                <ul className='listItem'>
                    <li className='item'>
                        <Link to="pages/Home" className='link'>Trang chủ</Link>
                    </li>

                    <li className='item'>
                        <Link to="pages/QuanLy" className='link'>Quản Lý</Link>
                    </li>

                    <li className='item'>
                        <Link to="pages/ThanhToan" className='link'>Thanh Toán</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="pages/Home" element={<Home />} />
                <Route path="pages/QuanLy" element={<ThongKe />} />
                <Route path="pages/ThanhToan" element={<ThanhToan />} />
            </Routes>
        </Router>
    );
}

export default Header;
