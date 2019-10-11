import React, { useState } from 'react';
import { Button as btn , ButtonToolbar } from 'react-bootstrap';
import './button.css';

class Button extends React.Component {
    btnClass = null;
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
        this.btnClass = this.props['data-class'];
        console.log(this.btnClass);
    }
    onClicked() {
    }
    render() {
        return (
            <button className="{this.btnClass ? 'menuBtn' : '' }" onClick={this.onClicked}>{this.btnClass}☰</button>
        );
    }
}

export default Button;