import React from 'react';
import './menu-item-link.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const MenuItemLink = (props) => {
    return (
        <Link className="menu-item-link" to={props.item.to}>
            <div className={"item-link-icon"}>
                <FontAwesomeIcon icon={props.item.icon} />
            </div>
            <div className={"item-link-label"}>
                {props.item.label}
            </div>
            <div className={"item-link-icon-status"}>
                {props.item.submenu&& (<FontAwesomeIcon icon={['fa','caret-left']} />)}
            </div>
        </Link>
    );
};

export default MenuItemLink;