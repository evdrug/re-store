import React from 'react';
import './vlan-form-map.css';
import {Col, CustomInput, FormGroup, Input, Label, Row} from "reactstrap";

const VlanFormMap = (props) => {
    const {handleCheck, handleInput} = props;
    const { vlan, mapVlan, mapSwitch, mapVlanCheck} = props.map;
    return (
        <FormGroup row>
            <Label for="vlanId" md={'1'}>Vlan</Label>
            <Col lg={'4'}>
                <Row className={'d-flex align-items-center'}>
                    <Col className={'mb-2'} sm={'6'}>
                        <Input name="vlan" id="vlanId" placeholder={'Vlan ID'} onChange={handleInput('vlan')} value={vlan.value} valid={vlan.focus && vlan.isValid} invalid={vlan.focus && !vlan.isValid}/>
                    </Col>
                    <Col className={'mb-2'} sm={'6'}>
                        <CustomInput type="switch" id="newVlan" name="mapVlanCheck" label="меняется ID" onChange={handleCheck} checked={mapVlanCheck}/>
                    </Col>
                </Row>
            </Col>

            <Col lg={'4'}>
                <Row className={mapVlanCheck ? "map-vlan-form opacity" : 'map-vlan-form'}>
                    { mapVlanCheck && (<React.Fragment>
                        <Col sm={'8'} className={'mb-2'}>
                            <Input type="text" name="mapSwitch" id="whereSw" placeholder="IP" onChange={handleInput('ip')} value={mapSwitch.value} valid={mapSwitch.focus && mapSwitch.isValid} invalid={mapSwitch.focus && !mapSwitch.isValid}/>
                        </Col>
                        <Col sm={'4'}>
                            <Input type="text" name="mapVlan" id="newVlanId" placeholder="Vlan ID" onChange={handleInput('vlan')}  value={mapVlan.value} valid={mapVlan.focus && mapVlan.isValid} invalid={mapVlan.focus && !mapVlan.isValid}/>
                        </Col>
                    </React.Fragment>)}
                </Row>
            </Col>
        </FormGroup>
    );
};

export default VlanFormMap;