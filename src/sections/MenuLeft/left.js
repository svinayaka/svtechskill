import React from 'react';
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import SearchComponent from '../../components/search/search-btn';
import './left.css';

class LeftMenu extends React.Component {
    render() {
        return (
            <div className="menuContent">
                <div><SearchComponent></SearchComponent></div>
                <ul className="Navigator">
                    <li><Link to="/about"><button>About Me</button></Link></li>
                    <li><Link to="/javascript"><button>JavaScript</button></Link></li>
                    <li><Link to="/css"><button>CSS</button></Link></li>
                </ul>
            </div>
        );
    }
}

export default LeftMenu;