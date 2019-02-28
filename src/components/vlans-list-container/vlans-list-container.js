import React, {Component} from 'react';
import './vlans-list-container.css';
import {withAPIServices} from "../hoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class VlansListContainer extends Component {
    data = this.props.apiService.dataVlans;
    componentDidMount() {
        console.log(this.data);
    }

    render () {

        return (
            <div>
                <table className={'table'}>
                    <tbody>
                        {this.data.map( (item) => {
                            return (
                                <tr key={item.id} className={''}>
                                    <td>
                                        <div>{ item.vlanIdP1 === item.vlanIdP2 ? (`${item.vlanIdP1} ${item.map}`) : (<div>{`${item.vlanIdP1}`} <FontAwesomeIcon icon={['fas', 'retweet']} size={'1x'}/> {`${item.vlanIdP2}`}</div>)}</div>
                                    </td>
                                    <td>{item.shape}</td>
                                    <td className={''}>
                                        <div>{ item.vlanIdP1 === item.vlanIdP2 ? null : (<div>{`Влан ${item.vlanIdP1}`} <FontAwesomeIcon icon={['fas', 'retweet']} size={'1x'}/> {`${item.vlanIdP2} на ${item.map}`}</div>)}</div>

                                        <div className={'d-flex mr-5 w-100'}>
                                            { item.info.length > 0 && item.info.map(point =>
                                                (
                                                    <div className={'w-50'} key={point.id}>
                                                        <div>{point.client}</div>
                                                        <div>{point.address}</div>
                                                        <div>{point.switch} - {point.port}</div>
                                                        <div>{point.account}</div>
                                                    </div>

                                                )
                                            )}
                                        </div>

                                        <div>{item.commentMap}</div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }

};

export default withAPIServices()(VlansListContainer);