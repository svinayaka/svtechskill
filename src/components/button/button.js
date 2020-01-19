import React, { useState, Fragment } from 'react';
import { Button as btn , ButtonToolbar } from 'react-bootstrap';
import './button.css';

class Button extends React.Component {
    btnClass = null;
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
        this.btnClass = this.props['data-class'];
    }
    onClicked() {
        const toggled = !this.props['data-toggle'];
        this.props.onToggle(toggled);
    }
    render() {
        if (this.btnClass === 'menuBtn') {
            return (
                <button className="menuBtn" onClick={this.onClicked}>☰</button>
            )
        } else {
            return (
                <button className="" onClick={this.onClicked}></button>
            )
        }
    }
}

export default Button;