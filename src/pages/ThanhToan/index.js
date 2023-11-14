import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ListSp from './ListSp';
import User from './User';
import { deleteItem, getListSp, getUser } from '~/API';
import XoaSp from './XoaSp';

const ThanhToan = (params) => {

    const [user, setUser] = useState({});
    const [listSp, setListSp] = useState([]);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

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

    const handleCancelDelete = () => {
        setConfirmationDialogOpen(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteItem(itemToDelete.id);
            getList();
            alert('Bạn đã xóa dịch vụ thành công!');
            setConfirmationDialogOpen(false);
        } catch (error) {
            console.error('Lỗi trong quá trình xóa phần tử từ API', error);
        }
    };

    const handleClickXoa = (item) => {
        setConfirmationDialogOpen(true);
        setItemToDelete(item);
    };

    return (
        <div>
            <Header />
            <User user={user} />
            <ListSp data={listSp} point={user?.point} handleDeleteClick={handleClickXoa} />
            <Footer />
            {isConfirmationDialogOpen ? (<div id='xoa'>
                <XoaSp
                    isOpen={isConfirmationDialogOpen}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            </div>) : null}
        </div>
    )
}

export default ThanhToan;