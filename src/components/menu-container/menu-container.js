import React from 'react';
import './menu-container.css';
import MenuItem from "../menu-item";

const MenuContainer = (props) => {
    return (
        <ul className="menu-container">
            {
                props.menu.map((item) => {
                    return (
                        <MenuItem item={item} key={item.id}/>
                    )
                })
            }
        </ul>
    );
};

export default MenuContainer;