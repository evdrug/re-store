import React, {Component} from 'react';
import { Form, FormGroup, Label, Col, Button, Row} from "reactstrap";
import VlanFormMap from "../vlan-form-map";
import { validate } from '../../utils'
import VlanFormShape from "../vlan-form-shape";
import VlanFormOpm from "../vlan-form-opm";
import VlanFormTypeUsl from "../vlan-form-typeUsl/vlan-form-typeUsl";
import VlanFormComment from "../vlan-form-comment/vlan-form-comment";
import VlanFormInfoPoint from "../vlan-form-infoPoint";

class VlanAddPage extends Component {
    colourOptions = [
        {value: 'ocean', label: 'OceandfsdsdsdsafsdfsaSDfsdfaSDAFSxafd22222 ', color: '#00B8D9', isFixed: true},
        {value: 'blue', label: 'Blue', color: '#0052CC', disabled: true},
        {value: 'purple', label: 'Purple', color: '#5243AA'},
        {value: 'red', label: 'Red', color: '#FF5630', isFixed: true},
        {value: 'orange', label: 'Orange', color: '#FF8B00'},
        {value: 'yellow', label: 'Yellow', color: '#FFC400'},
        {value: 'green', label: 'Green', color: '#36B37E'},
        {value: 'forest', label: 'Forest', color: '#00875A'},
        {value: 'slate', label: 'Slate', color: '#253858'},
        {value: 'silver', label: 'Silver', color: '#666666'},
    ];
    defaultOptions = [
        {value: 'orange', label: 'Orange', color: '#FF8B00'},
    ];

    state = {
        inputValue: '',
        mapVlanCheck: false,
        vlan: {
            value: '',
            focus: false,
            isValid: false,
        },
        mapVlan: {
            value: '',
            focus: false,
            isValid: false,
        },
        mapSwitch: {
            value: '',
            focus: false,
            isValid: false,
        },

        shape: {
            value: '',
            focus: false,
            isValid: false,
        },

        opmCheck: false,
        opmName: null,
        opmFocus: false,

        typeUsl: null,
        optionsTypeUsl : [
            {label: "L2 (Точка - Точка)", value: 'ptp'},
            {label: "L2 (Точка - Многоточка)", value: 'ptm'},
            {label: "L3", value: 'l3'},
        ],
        comment: '',

        optionsTypeTask : [
            {label: "Заявка", value: 'aplication'},
            {label: "Обращение", value: 'trouble'},
        ],
        typeTask: null,
    };

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({inputValue})
    };

    handleCheckVlan = (e) => {
        this.setState((state) => {
            return {
                mapVlanCheck: !state.mapVlanCheck,
                mapVlan: {
                    value: '',
                    focus: false,
                    isValid: false,
                },
                mapSwitch: {
                    value: '',
                    focus: false,
                    isValid: false,
                }
            }
        })
    };
    handleCheckOpm = (e) => {
        this.setState((state) => {
            return {
                opmCheck: !state.opmCheck,
                opmName: null,
                opmFocus: false
            }
        })
    };

    handleInput = (param) => (e) => {
        const { name, value } = e.target;
        const trimValue = value.trim();
        this.setState((state) => {
            return {
                [name]: {...state[name], value: trimValue, focus: true, isValid: validate[param](trimValue)}
            }
        })
    };
    handleComment = (e) => {
        this.setState(() => {
            return {
                comment: e.editor.getData()
            }
        })
    };

    setOptions = (e) => {
        this.setState({
            opmName: e,
            opmFocus: true
        })
    };
    setSelOptions = (type) => (e) => {
        const value = e ? e.value : null ;
        this.setState({
            [type]: value
        })
    };

    filterColors = (inputValue) => {
        return this.colourOptions.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    loadOptions = (inputValue, callback) => {
        if (!inputValue) return;
        setTimeout(() => {
            callback(this.filterColors(inputValue));
        }, 1000);
    };

    render() {
        const map = {
            vlan: this.state.vlan,
            mapVlan: this.state.mapVlan,
            mapSwitch: this.state.mapSwitch,
            mapVlanCheck: this.state.mapVlanCheck
        };
        return (
            <div className={'m-2 wrapper-body'}>
                <h2>Добавить влан</h2>
                <hr/>
                <Form className={""}>
                    <FormGroup row>
                        <Col className={'wrapper-block'}>
                            <VlanFormMap handleCheck={this.handleCheckVlan} map={map} handleInput={this.handleInput} />
                            <VlanFormShape handleInput={this.handleInput} shape={this.state.shape}/>
                            <VlanFormOpm
                                opmName={this.state.opmName}
                                opmCheck={this.state.opmCheck}
                                handleCheckOpm={this.handleCheckOpm}
                                loadOptions={this.loadOptions}
                                handleInputChange={this.handleInputChange}
                                setOptions={this.setOptions}
                                opmFocus={this.state.opmFocus}
                            />

                        <VlanFormTypeUsl
                            optionsTypeUsl={this.state.optionsTypeUsl}
                            setSelOptions={this.setSelOptions}
                        />

                        {this.state.typeUsl && (
                            <FormGroup row>
                                <Label md={1}>Доп. инфо</Label>
                                <Col lg={11}>
                                    <Row>
                                        {this.state.typeUsl === 'l3' && (<VlanFormInfoPoint />)}
                                        {this.state.typeUsl && this.state.typeUsl !== 'l3' && [1,2].map((item, key) => (<VlanFormInfoPoint key={key}/>))}
                                    </Row>
                                </Col>
                            </FormGroup>
                        )}


                        <VlanFormComment comment={this.state.comment} handleComment={this.handleComment}/>



                            {/*<FormGroup row>*/}
                                {/*<Label for="typeChanel" md={1}>Тип задачи</Label>*/}
                                {/*<Col lg={10}>*/}
                                    {/*<Select*/}
                                        {/*placeholder={'Выбрать'}*/}
                                        {/*options={this.state.optionsTypeTask}*/}
                                        {/*onChange={this.setSelOptions('typeTask')}*/}
                                        {/*isClearable*/}
                                        {/*isSearchable={false}*/}
                                        {/*name="typeTask"*/}
                                    {/*/>*/}
                                {/*</Col>*/}
                            {/*</FormGroup>*/}


                            {/*<FormGroup row>*/}
                                {/*<Label md={1}>Доп. инфо</Label>*/}
                                {/*<Col lg={10}>*/}
                                    {/*<Row>*/}


                                        {/*<Col lg>*/}
                                            {/*<FormGroup checked>*/}
                                                {/*<CustomInput type="checkbox" label={' Точка А'} id={'newVlan'}/>*/}
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup>*/}
                                                {/*<Col className={'wrapper-client'}>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="client" md={2}>Клиент</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="client" id="client"*/}
                                                                   {/*placeholder="Клиент"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="address" md={2}>Адрес</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="address" id="address"*/}
                                                                   {/*placeholder="Адрес"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="ip" md={2}>Switch</Label>*/}
                                                        {/*<Col className={'mb-2'}>*/}
                                                            {/*<Input type="text" name="ip" id="ip" placeholder="IP"/>*/}
                                                        {/*</Col>*/}
                                                        {/*<Col>*/}
                                                            {/*<Input type="text" name="port" id="port"*/}
                                                                   {/*placeholder="Port"/>*/}
                                                        {/*</Col>*/}

                                                        {/*<Col>*/}
                                                            {/*<Input type="select" name="typePort" id="port">*/}
                                                                {/*<option>untagget</option>*/}
                                                                {/*<option>tagget</option>*/}
                                                            {/*</Input>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}

                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="accaunt" md={2}>Аккаунт</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="accaunt" id="accaunt"*/}
                                                                   {/*placeholder="что-то такое 6000048569"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}

                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="pointComment" md={2}>Доп. данные</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="textarea" name="pointComment" id="pointComment"*/}
                                                                   {/*placeholder="Комментарий к точке"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}


                                                {/*</Col>*/}
                                            {/*</FormGroup>*/}
                                        {/*</Col>*/}
                                        {/*<Col lg>*/}
                                            {/*<FormGroup checked>*/}
                                                {/*<CustomInput type="checkbox" label={' Точка А'} id={'newVlan'}/>*/}
                                            {/*</FormGroup>*/}
                                            {/*<FormGroup>*/}
                                                {/*<Col className={'wrapper-client'}>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="client" md={2}>Клиент</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="client" id="client"*/}
                                                                   {/*placeholder="Клиент"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="address" md={2}>Адрес</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="address" id="address"*/}
                                                                   {/*placeholder="Адрес"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}
                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="ip" md={2}>Коммутатор</Label>*/}
                                                        {/*<Col className={'mb-2'}>*/}
                                                            {/*<Input type="text" name="ip" id="ip" placeholder="IP"/>*/}
                                                        {/*</Col>*/}
                                                        {/*<Col>*/}
                                                            {/*<Input type="text" name="port" id="port"*/}
                                                                   {/*placeholder="Port"/>*/}
                                                        {/*</Col>*/}

                                                        {/*<Col>*/}
                                                            {/*<Input type="select" name="typePort" id="port">*/}
                                                                {/*<option>untagget</option>*/}
                                                                {/*<option>tagget</option>*/}
                                                            {/*</Input>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}

                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="accaunt" md={2}>Аккаунт</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="text" name="accaunt" id="accaunt"*/}
                                                                   {/*placeholder="что-то такое 6000048569"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}

                                                    {/*<FormGroup row>*/}
                                                        {/*<Label for="pointComment" md={2}>Доп. данные</Label>*/}
                                                        {/*<Col md={'10'}>*/}
                                                            {/*<Input type="textarea" name="pointComment" id="pointComment"*/}
                                                                   {/*placeholder="Комментарий к точке"/>*/}
                                                        {/*</Col>*/}
                                                    {/*</FormGroup>*/}


                                                {/*</Col>*/}
                                            {/*</FormGroup>*/}
                                        {/*</Col>*/}
                                    {/*</Row>*/}
                                {/*</Col>*/}
                            {/*</FormGroup>*/}


                            <Button color={'success'}>Добавить</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

VlanAddPage.propTypes = {};

export default VlanAddPage;