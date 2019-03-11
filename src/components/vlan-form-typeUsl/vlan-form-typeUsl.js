import React from 'react';
import {Col, FormGroup, Label} from "reactstrap";
import Select from 'react-select';

const VlanFormTypeUsl = (props) => {
    return (
        <FormGroup row>
            <Label for="typeChanel" md={1}>Тип услуги</Label>
            <Col lg={11}>
                <Select
                    placeholder={'Выбрать'}
                    options={props.optionsTypeUsl}
                    onChange={props.setSelOptions('typeUsl')}
                    isClearable
                    isSearchable={false}
                    name="typeUsl"
                />
            </Col>
        </FormGroup>
    );
};

export default VlanFormTypeUsl;