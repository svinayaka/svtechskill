import React, { useState } from 'react';
import { Button as btn , ButtonToolbar } from 'react-bootstrap';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
    }
    onClicked() {
        
    }
    render() {
        return (
            <button className="{ this.props.className }" onClick={this.onClicked}>☰</button>
        );
    }
}

export default Button;