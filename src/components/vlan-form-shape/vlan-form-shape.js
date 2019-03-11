import React from 'react';
import './vlan-form-shape.css';
import {Col, FormGroup, Input, Label} from "reactstrap";

const VlanFormShape = (props) => {
    const { handleInput, shape} = props;
    return (
        <FormGroup row>
            <Label for="Shape" md={'1'}>Шейп</Label>
            <Col lg={'4'}>
                <Input type="text" name="shape" id="Shape"
                       placeholder={'как-то так 3M@172.17.3.5'}
                       onChange={handleInput('shape')}
                       value={shape.value}
                       valid={shape.focus && shape.isValid}
                       invalid={shape.focus && !shape.isValid}
                />
            </Col>
        </FormGroup>
    );
};

export default VlanFormShape;