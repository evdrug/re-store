import React from 'react';
import './header.css';

import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={"header"}>
            <h1><Link to={'/'}>ReStore</Link></h1>
            <div><Link to={'/cart'}> 5 items ($210)</Link></div>
        </div>
    );
};

export default Header;