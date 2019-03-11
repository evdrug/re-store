import React from 'react';
import {Route, Switch} from "react-router-dom";
import {VlanListPage, VlanAddPage} from "./index";

const VlanPages = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/vlans/' component={VlanListPage}/>
                <Route exact path='/vlans/add/' component={VlanAddPage}/>
                <Route path='/vlans/:id' render={(props) => {
                    return (<div>id : {props.match.params.id}</div>);
                } }/>
            </Switch>
        </div>
    );
};

export default VlanPages;