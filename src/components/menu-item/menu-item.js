import React from 'react';
import './menu-item.css';
import { connect } from "react-redux";

import MenuContainer from "../menu-container";
import MenuItemLink from "../menu-item-link";
import { visibleSubmenu, activeLink } from "../../actions/menu";

const MenuItem = (props) => {
    const { item } = props;
    return (
        <li className="menu-item">
            <MenuItemLink item={item} {...props}/>
            {item.submenu&& (<MenuContainer menu={item.submenu} visible={item.visible}/>)}
        </li>
    );
};

const mapDispatchToProps = {
    visibleSubmenu,
    activeLink
};


export default connect(null,mapDispatchToProps)(MenuItem);