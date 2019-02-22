import React, {Component} from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  * as iccons   from '@fortawesome/free-solid-svg-icons'


const menu = [
    {
        id:1,
        label:'Home',
        icon: ['fa','coffee'],
        parentId: '',
        to: '/'
    },
    {
        id:2,
        label:'Cart',
        icon: ['fab','google'],
        parentId: '',
        to: '/cart'
    },
    {
        id:3,
        label:'Test',
        icon: ['fa','exchange-alt'],
        parentId: '',
        to: '/test'
    }
];

class Menu extends Component {
    render() {
        return (
            <nav className="my_navbar">
                <ul className="list-group">

                    {
                        menu.map((item) => {
                            return (
                                <li className="my_navbar-item" key={item.id}>
                                    <div className={"wrap_icon-menu"}><FontAwesomeIcon icon={item.icon} /></div>
                                    <Link className="my_navbar-link" to={item.to}>{item.label}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </nav>
        );
    }
}

export default Menu;