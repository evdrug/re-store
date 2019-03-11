import React from 'react';
import {Col, FormGroup, Label, Input} from "reactstrap";
import Row from "reactstrap/es/Row";

const VlanFormInfoPoint = () => {
    return (
        <Col lg>
            <FormGroup>
                <Col className={'wrapper-client'}>
                    <FormGroup row>
                        <Label for="client" md={2}>Клиент</Label>
                        <Col md={'10'}>
                            <Input type="text" name="client" id="client"
                                   placeholder="Клиент"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="address" md={2}>Адрес</Label>
                        <Col md={'10'}>
                            <Input type="text" name="address" id="address"
                                   placeholder="Адрес"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="ip" md={2}>Switch</Label>
                        <Col md={'10'}>
                            <Row className={'mb-1'}>
                                <Col>
                                    <Input type="text" name="ip" id="ip" placeholder="IP"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <Input type="text" name="port" id="port"
                                           placeholder="Port"/>
                                </Col>

                                <Col md>
                                    <Input type="select" name="typePort" id="port">
                                        <option>untagget</option>
                                        <option>tagget</option>
                                    </Input>
                                </Col>
                            </Row>
                        </Col>


                    </FormGroup>

                    <FormGroup row>
                        <Label for="accaunt" md={2}>Аккаунт</Label>
                        <Col md={'10'}>
                            <Input type="text" name="accaunt" id="accaunt"
                                   placeholder="что-то такое 6000048569"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="pointComment" md={2}>Доп. данные</Label>
                        <Col md={'10'}>
                            <Input type="textarea" name="pointComment" id="pointComment"
                                   placeholder="Комментарий к точке"/>
                        </Col>
                    </FormGroup>


                </Col>
            </FormGroup>
        </Col>
    );
};

export default VlanFormInfoPoint;