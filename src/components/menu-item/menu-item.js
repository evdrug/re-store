import React from 'react';
import './menu-item.css';

import MenuContainer from "../menu-container";
import MenuItemLink from "../menu-item-link";

const MenuItem = (props) => {

    return (
        <li className="menu-item">
            <MenuItemLink item={props.item}/>
            {props.item.submenu&& (<MenuContainer menu={props.item.submenu}/>)}
        </li>
    );
};

export default MenuItem;