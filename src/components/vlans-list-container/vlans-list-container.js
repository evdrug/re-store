import React, {Component} from 'react';
import './vlans-list-container.css';
import {withAPIServices} from "../hoc";
import VlansItem from "../vlans-item";

class VlansListContainer extends Component {
    data = this.props.apiService.dataVlans;
    componentDidMount() {
        console.log(this.data);
    }

    render () {

        return (
            <div>
                <table className={'table  table-striped '}>
                    <tbody>
                        {this.data.map( (item) => {
                            return (
                                <VlansItem item={item} key={item.id} />
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }

};

export default withAPIServices()(VlansListContainer);