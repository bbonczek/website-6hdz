import React, { Component } from 'react';
import { Col, Row, FormControl, Button } from 'react-bootstrap';
import './Message.css';

class Message extends Component {
    sendEmail() {
        alert('chcialbys');
    }

    render() {
        return (
                <Row className="margin-top-2">
                    <Col md={6}>
                        <FormControl type="text" placeholder="imię"/>
                    </Col>
                    <Col md={6}>
                        <FormControl type="text" placeholder="email"/>
                    </Col>
                    <Col md={12} className="margin-top-1">
                        <FormControl componentClass="textarea" type="textarea" placeholder="wiadomość" rows={10}/>
                    </Col>
                    <Col md={12} className="margin-top-1">
                        <Button block onClick={this.sendEmail}>Wyślij</Button>
                    </Col>
                </Row>
        );
    }
}

export default Message;