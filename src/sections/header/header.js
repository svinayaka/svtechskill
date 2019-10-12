import React from 'react';
import './header.css';

class Header extends React.Component {
    headerTitle = 'Web Techincal Skills';
    render() {
        return (
            <div className="header">{this.headerTitle}</div>
        )
    }
}


export default Header;