import React from 'react';
import './menu-item.css';

import Menu from "../menu";
import MenuItemLink from "../menu-item-link";

const MenuItem = (props) => {
    const { item } = props;
    return (
        <li className="menu-item">
            <MenuItemLink item={item} {...props}/>
            {item.submenu&& (<Menu menu={item.submenu} visible={item.visible}/>)}
        </li>
    );
};

export default MenuItem;