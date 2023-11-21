import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ListSp from './ListSp';
import User from './User';
import { getListSp, getUser } from '~/API';

const ThanhToan = (params) => {

    const [user, setUser] = useState({});
    const [listSp, setListSp] = useState([]);

    useEffect(() => {
        getuser();
    }, [])

    useEffect(() => {
        getList();
    }, [])

    const getuser = async () => {
        try {
            const response = await getUser();
            const result = response.data;
            setUser(result);
        } catch (error) {
            setUser(null);
            console.error('Lỗi trong quá trình gửi yêu cầu API user', error);
        }
    }

    const getList = async () => {
        try {
            const response = await getListSp();
            const result = response.data;
            setListSp(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API listsp', error);
        }
    }

    return (
        <div>
            <Header />
            <User user={user} getuser={getuser} />
            <ListSp
                user={user}
                data={listSp}
                point={user?.point}
                setUser={setUser}
            />
            <Footer />
        </div>
    )
}

export default ThanhToan;