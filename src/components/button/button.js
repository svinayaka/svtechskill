import React from 'react';
import { Button as btn , ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component {
    render() {
        return (
            <button className="{ this.props.className }">☰</button>
        );
    }
}

export default Button;