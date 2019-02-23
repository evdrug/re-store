import React, {Component} from 'react';
import './menu.css';

import MenuContainer from "../menu-container";
// import  * as iccons   from '@fortawesome/free-solid-svg-icons'


const menu = [

    {
        id:1,
        label:'Home',
        icon: ['fa','coffee'],
        parentId: '',
        to: '/',
    },
    {
        id:2,
        label:'Cart',
        icon: ['fab','google'],
        parentId: '',
        to: '/cart',
        submenu: [
            {
                id:4,
                label:'sub1',
                icon: ['fa','coffee'],
                parentId: '',
                to: '/',
            },
            {
                id:5,
                label:'sub2',
                icon: ['fa','exchange-alt'],
                parentId: '',
                to: '#',
            },
            {
                id:6,
                label:'sub3',
                icon: ['fa','exchange-alt'],
                parentId: '',
                to: '#',
                submenu: [
                    {
                        id:7,
                        label:'sub1',
                        icon: ['fa','coffee'],
                        parentId: '',
                        to: '/',
                    },
                    {
                        id:8,
                        label:'sub4',
                        icon: ['fa','exchange-alt'],
                        parentId: '',
                        to: '#',
                    }
                ]
            }
        ]
    },
    {
        id:3,
        label:'Test',
        icon: ['fa','exchange-alt'],
        parentId: '',
        to: '#',
    }
];

class Menu extends Component {
    render() {
        return (
            <nav className="my_navbar">
                <MenuContainer menu={menu} />
            </nav>
        );
    }
}

export default Menu;