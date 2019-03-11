import React from 'react';
import './vlan-form-opm.css';
import {Col, CustomInput, FormGroup, Label, Row} from "reactstrap";
import AsyncSelect from 'react-select/lib/Async';

const VlanFormOpm = (props) => {
    const { opmName, opmCheck, handleCheckOpm, loadOptions, handleInputChange, setOptions, opmFocus } = props;
    const stylesInValid = {
        control:(provided) => {
            console.log(provided);
            const t = {
                borderColor: '#dc3545',
                '&:hover': {borderColor: "#dc3545"},
                boxShadow: "0 0 0 3px rgba(220,53,69,.25)",
            }
            return {...provided, ...t};
        }
    };
    const stylesValid = {
        control:(provided) => {
            const t = {
                borderColor: '#28a745',
                '&:hover': {borderColor: "#28a745"},
                boxShadow: "0 0 0 3px rgba(40,167,69,.25)"
            }
            return {...provided, ...t};
        }
    };
    return (
        <FormGroup row>
            <Label for="comment" md={1}>ОПМ</Label>
            <Col lg={'11'}>
                <Row>
                    <Col sm={1} className={'d-flex align-items-center'}>
                        <CustomInput type="switch" id="opm" name="opmCheck" label="" onChange={handleCheckOpm} checked={opmCheck} />
                    </Col>
                    <Col sm={11}>
                        <AsyncSelect
                            isClearable
                            cacheOptions
                            loadOptions={loadOptions}
                            onInputChange={handleInputChange}
                            onChange={setOptions}
                            placeholder={'Найти'}
                            noOptionsMessage={() => 'Ничего не найдено'}
                            loadingMessage={() => 'Загрузка...'}
                            isDisabled={!opmCheck}
                            value={opmName}
                            styles={opmFocus && opmName && opmCheck ? stylesValid : opmFocus && !opmName ? stylesInValid : ''}
                        />
                    </Col>
                </Row>
            </Col>
        </FormGroup>
    );
};

export default VlanFormOpm;