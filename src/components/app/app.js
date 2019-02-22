import React from 'react';
import './app.css';
import { Route, Switch } from "react-router-dom";

import { HomePage, CartPage } from '../pages';
import Header from "../header";
import Menu from "../menu";

const App = () => {

    return (
        <div >
            <Menu/>
            <div className="wrapper">
                <div className="container-fluid">
                    <div className={'row'}>
                        <div className={'col'}>
                            <Header/>
                            <Switch>
                                <Route exact path='/' component={HomePage}/>
                                <Route path='/cart' component={CartPage}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default App;