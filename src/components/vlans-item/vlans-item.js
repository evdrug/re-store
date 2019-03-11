import React from 'react';
import './vlans-item.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import VlansItemPoint from "../vlans-item-point/vlans-item-point";


const VlansItem = (props) => {
    const { item } = props;
    return (
        <tr className={'row hr-container'}>
            <td className={'col-lg-1'}>
                <div className={'position-center'}>{ item.vlanIdP1 === item.vlanIdP2
                    ? (`${item.vlanIdP1} ${item.map}`)
                    : (<div>{`${item.vlanIdP1}`} <FontAwesomeIcon icon={['fas', 'retweet']} size={'1x'}/> {`${item.vlanIdP2}`}</div>)}
                </div>
            </td>
            <td className={'col-lg-2'}><div className={'position-center'}>{item.shape}</div></td>
            <td className={'col-lg-7'}>
                <div className={'row'}>
                    <div className={'col'}><b>
                        { item.vlanIdP1 === item.vlanIdP2
                            ? null
                            : (<div>{`Влан ${item.vlanIdP1}`} <FontAwesomeIcon icon={['fas', 'retweet']} size={'1x'}/> {`${item.vlanIdP2} на ${item.map}`}</div>)}
                    </b></div>
                </div>
                <div className={'row'}>
                    { item.info.map((point) =>
                        (
                            <VlansItemPoint point={point} key={point.id} />
                        )
                    )}
                </div>

                <div className={'row'}>
                    <div className={'col'}>
                        {item.commentMap}
                    </div></div>
            </td>
            <td className={'col-lg-1'}>
                <div className={'position-center'}>{item.userName}</div>
            </td>
            <td className={'col-lg-1'}>
                <div className={'position-center'}>
                    <button className={'btn btn-success btn-margin'}><FontAwesomeIcon icon={['fa', 'edit']}/></button>
                    {/*<button className={'btn btn-danger btn-margin'}><FontAwesomeIcon icon={['fa', 'trash-alt']}/></button>*/}
                </div>
            </td>
        </tr>
    );
};

export default VlansItem;