import React from 'react';
import './menu-item-link.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MyLink from "../my-link/my-link";
import MySubLink from "../my-sub-link/my-sub-link";

const MenuItemLink = (props) => {
    const {item} = props;
    const classVisible = item.visible ? ' rotate-90' : '';
    const classActive = item.activeLink ? ' active' : '';
    const classActiveChild = item.activeChildLink ? ' active-child' : '';

    const wrappLink = (item) => {
        return (<React.Fragment>
            <div className={"item-link-icon"}>
                <FontAwesomeIcon icon={item.icon}/>
            </div>
            <div className={"item-link-label"}>
                {item.label}
            </div>
            <div className={`item-link-icon-status${classVisible}`}>
                {item.submenu && (<FontAwesomeIcon icon={['fa', 'caret-left']}/>)}
            </div>
        </React.Fragment>)
    };

    if (item.submenu) {
        return (
            <MySubLink className={`menu-item-link${classActive}${classActiveChild}`} item={item}>
                {wrappLink(item)}
            </MySubLink>
        );
    }
    return (
        <MyLink className={`menu-item-link${classActive}${classActiveChild}`} to={item.to} >
            {wrappLink(item)}
        </MyLink>
    );
};

export default MenuItemLink;