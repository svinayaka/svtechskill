import React from 'react';
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import './left.css';

class LeftMenu extends React.Component {
    render() {
        return (
            <div className="menuContent">
                <ul className="Navigator">
                    <li><Link to="/javascript"><button>JavaScript</button></Link></li>
                    <li><Link to="/css"><button>CSS</button></Link></li>
                </ul>
            </div>
        );
    }
}

export default LeftMenu;