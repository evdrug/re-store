import React, {Component} from 'react';
import './menu.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {activeLink} from "../../actions/menu";

import MenuContainer from "../menu-container";

// import  * as iccons   from '@fortawesome/free-solid-svg-icons'
let tracert =[];
const subMenu = (menu, parentId = '') => {
    const m = menu.filter( item => item.parentId === parentId );
    return m.map(item => {
        const copyItem = {...item};
        copyItem.tracert = [...tracert];
        tracert.push(item.id);
        const submenu = subMenu(menu, copyItem.id);
        if (submenu.length) {
            copyItem.submenu = submenu;
        }
        tracert.pop();
        return copyItem;
    });
};


const trace = (menu) => {
    const copyMenu = menu.map(item => ({...item}));
    let tracert =[];
    const flatMenu = (menu, parentId = '') => {
       const m = menu.filter(item => item.parentId === parentId);
       return m.map(item => {
           item.tracert = [...tracert];
           tracert.push(item.id);
           flatMenu(menu, item.id);
           tracert.pop();
           return item;
       });
    };
    flatMenu(copyMenu);
    return copyMenu;
};



class Menu extends Component {
    componentDidMount() {
        const item = trace(this.props.menu).filter(link => link.to === this.props.location.pathname);
        
        if (item.length) {
            this.props.activeLink(item[0]);
        }
    }

    render() {
        return (
            <nav className="my_navbar">
                <MenuContainer menu={subMenu(this.props.menu)} />
            </nav>
        );
    }
}



const mapToProps = ({ menu }) => {
    return {
        menu
    }
};

const mapDispatchToProps = {
    activeLink
};

export default connect(mapToProps, mapDispatchToProps)(withRouter(Menu));