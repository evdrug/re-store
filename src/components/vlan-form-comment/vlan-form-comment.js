import React from 'react';
import {Col, FormGroup, Label} from "reactstrap";
import CKEditor from 'ckeditor4-react';

const VlanFormComment = (props) => {
    return (
        <FormGroup row>
            <Label for="comment" md={'1'}>Коммент.</Label>
            <Col lg={'11'}>
                <CKEditor
                    data={props.comment}
                    onChange={e => props.handleComment( e )}
                    config={{
                        height: 100,
                    }}
                />
            </Col>
        </FormGroup>
    );
};

export default VlanFormComment;