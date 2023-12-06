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
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || number;
};

export default App;
