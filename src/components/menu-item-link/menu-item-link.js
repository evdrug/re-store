import React from 'react';
import './menu-item-link.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from "react-router-dom";

const MenuItemLink = (props) => {
    const { item, visibleSubmenu, activeLink } = props;
    const classVisible = item.visible ? ' rotate-90' : '';
    const classActive = item.activeLink ? ' active' : '';
    const classActiveChild = item.activeChildLink ? ' active-child' : '';

    const active = (e) => {
        e.preventDefault();
        props.history.push(item.to);
        activeLink(item)
    };

    const wrappLink = (item) => {
        return (<React.Fragment>
            <div className={"item-link-icon"}>
                <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className={"item-link-label"}>
                {item.label}
            </div>
            <div className={`item-link-icon-status${classVisible}`}>
                {item.submenu&& (<FontAwesomeIcon icon={['fa','caret-left']} />)}
            </div>
        </React.Fragment>)
    };

    if (item.submenu) {
        return (
            <div className={`menu-item-link${classActive}${classActiveChild}`} onClick={() => visibleSubmenu(item) }>
                {wrappLink(item)}
            </div>
        );
    }
    return (
        <a className={`menu-item-link${classActive}${classActiveChild}`} href={item.to} onClick={(e) => active(e)}>
            {wrappLink(item)}
        </a>
    );
};

export default withRouter(MenuItemLink);