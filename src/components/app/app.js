import React from 'react';
import './app.css';
import { Route, Switch } from "react-router-dom";

import {HomePage, CartPage, VlanPages} from '../pages';
import Header from "../header";
import MenuContainer from "../menu-container";
import {connect} from "react-redux";
import {menuToggle} from "../../actions/menu";

const App = (props) => {

    return (
        <div >
            <MenuContainer/>
            <div className={props.menuActive ? 'wrapper-active-menu' : 'wrapper' }>
                <div className="container-fluid">
                    <div className={'row'}>
                        <div className={'header-wrapper'}>
                            <Header menuToggle={props.menuToggle} menuActive={props.menuActive}/>
                        </div>
                    </div>
                    <div className={'row mt-5'}>
                        <div className={'col'}>
                                <Switch>
                                    <Route exact path='/' component={HomePage}/>
                                    <Route exact path='/cart/' component={CartPage}/>
                                    <Route path='/cart/:id' component={CartPage}/>
                                    <Route path='/vlans/' component={VlanPages}/>
                                    <Route path='/xxx' render={() => {
                                        return (<div>H1</div>);
                                    } }/>
                                </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

const mapStateToProps = ({menuState:{menuActive}}) => {
    return {
        menuActive
    }
};

const mapDispatchToProps = {
    menuToggle
};


export default connect (mapStateToProps, mapDispatchToProps)(App);