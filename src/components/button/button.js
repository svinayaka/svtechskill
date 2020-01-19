import React, { useState, Fragment } from 'react';
import { Button as btn , ButtonToolbar } from 'react-bootstrap';
import './button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
    }
    onClicked() {
        const toggled = !this.props.TECHSKILLS.show;
        this.props.onToggle(toggled);
    }
    render() {
        if (this.props['data-class'] === 'menuBtn') {
            return (
                <button className={this.props['data-class']} onClick={this.onClicked}>☰</button>
            )
        } else {
            return (
                <button className="" onClick={this.onClicked}></button>
            )
        }
    }
}

export default Button;