import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/Massage iventory">Massage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;