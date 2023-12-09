import React from 'react';
import './App.css';
import Header from './pages/Header';

function App() {

    return (
        <div id='App'>
            <Header />
        </div>
    )
}

export const formatNumberWithCommas = (number) => {
    const tmp = number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return tmp.split('.')[0] || number;
};

export default App;
