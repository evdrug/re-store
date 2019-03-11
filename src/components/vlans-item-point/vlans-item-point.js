import React from 'react';
import './vlans-item-point.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const VlansItemPoint = (props) => {
    const { point } = props;
    return (
        <div className={'col-sm'} >

            <div className={'wrap-info'}>
                <div className={'point-type'}>{point.client}{point.typePoint === 'mp' ? <div className={'rotate-90'}><FontAwesomeIcon icon={['fas', 'code-branch']} size={'1x'}/></div> : null}</div>
                <div>{point.typeTask === 'z' ? (<div>Заявка: {point.numberTask}</div>) : (<div>Обращение: {point.numberTask}</div>)}</div>

                <div>{point.address}</div>

                <div>{point.switch} порт {point.port}<small>({point.typePort})</small></div>

                <div>{point.account}</div>
                {point.comment && (<div>{point.comment}</div>)}
            </div>


        </div>
    );
};

export default VlansItemPoint;