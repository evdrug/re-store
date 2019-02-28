import React from 'react';
import './header.css';

import MyLink from "../my-link/my-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {
    return (
        <div className={props.menuActive ? "header menu-active" : "header"}>
            <div className={'header-container'}>
                <div className={"headerMenu"} onClick={props.menuToggle}><FontAwesomeIcon icon={['fa', 'bars']} size={"2x"}/></div>
                <h1 className={'logo'}><MyLink to={'/'}>ReStore</MyLink></h1>
                <div><MyLink to={'/cart/'}> 5 items ($210)</MyLink></div>
            </div>

        </div>
    );
};


export default Header;