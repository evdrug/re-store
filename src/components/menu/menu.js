import React from 'react';
import './menu.css';
import MenuItem from "../menu-item";

const Menu = (props) => {
    const { menu, visible } = props;
    const classVisible = visible ? ' visible' : '';
    if (menu) {
        return (
            <ul className={`menu-container${classVisible}`}>
                {
                    menu.map((item) => {
                        return (
                            <MenuItem item={item} key={item.id}/>
                        )
                    })
                }
            </ul>
        );
    }
    return (<span>Нет данных меню</span>)

};

export default Menu;