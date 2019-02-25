import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuItemSubLink = (props) => {
    const { item, visibleSubmenu } = props;
    const classVisible = item.visible ? ' rotate-90' : '';
    return (
        <div className="menu-item-link" onClick={() =>
            visibleSubmenu(item)
        }>
            <div className={"item-link-icon"}>
                <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className={"item-link-label"}>
                {item.label}
            </div>
            <div className={`item-link-icon-status${classVisible}`}>
                {item.submenu&& (<FontAwesomeIcon icon={['fa','caret-left']} />)}
            </div>
        </div>
    );
};

export default MenuItemSubLink;