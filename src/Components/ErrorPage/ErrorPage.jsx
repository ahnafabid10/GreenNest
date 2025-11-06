import React from 'react';
import ErrorImg from '../../assets/App-Error.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <img className='max-w-[900px] mx-auto p-50' src={ErrorImg} alt="" />
        </div>
    );
};

export default ErrorPage;