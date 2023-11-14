import React, { useState, useEffect } from 'react';
import './qldv.css';
import ListDV from './ListDV';
import DetailDV from './DetailDV';
import XoaDV from './XoaDV';
import { getListDV, getDetailDV, deleteItem } from '~/API';

function QLDV(params) {
    const [detailDV, setDetailDV] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

    const getListdv = async () => {
        try {
            const response = await getListDV();
            const result = response.data;
            setData(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API', error);
        }
    }

    const getDetaildv = async (item) => {
        try {
            const response = await getDetailDV(item.id);
            const result = response.data;
            setSelectedItem(result);
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu API', error);
        }
    }

    useEffect(() => {
        getListdv();
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        getDetaildv(item.id);
        setDetailDV(true);
    };


    const handleCancelDelete = () => {
        setConfirmationDialogOpen(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteItem(itemToDelete.id);
            getListdv();
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

    const goBack = () => {
        setDetailDV(false);
        setSelectedItem(null);
    }

    return (
        <div id='QLDV'>
            <ListDV data={data}
                handleItemClick={handleItemClick}
                handleDeleteClick={handleClickXoa}
            />
            {detailDV ? (
                <div id='detailDV'>
                    <DetailDV item={selectedItem} goBack={goBack} />
                </div>) : null}
            {isConfirmationDialogOpen ? (<div id='xoa'>
                <XoaDV
                    isOpen={isConfirmationDialogOpen}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            </div>) : null}
        </div>
    )
}

export default QLDV;
