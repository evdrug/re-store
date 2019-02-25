import React, {Component} from 'react';
import './menu.css';
import { connect } from 'react-redux';


import MenuContainer from "../menu-container";

// import  * as iccons   from '@fortawesome/free-solid-svg-icons'
let tracert =[];
const parentMenu = (menu, parentId = '') => {
    const m = menu.filter( item => item.parentId === parentId );
    return m.map(item => {
        const copyItem = {...item};
        copyItem.tracert = [...tracert];
        tracert.push(item.id);
        const submenu = parentMenu(menu, copyItem.id);
        if (submenu.length) {
            copyItem.submenu = submenu;
        }
        tracert.pop();
        return copyItem;
    });
};



class Menu extends Component {
    render() {
        console.log(parentMenu(this.props.menu));
        return (
            <nav className="my_navbar">
                <MenuContainer menu={parentMenu(this.props.menu)} />
            </nav>
        );
    }
}



const mapToProps = ({ menu }) => {
    return {
        menu
    }
};

export default connect(mapToProps)(Menu);