import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="menuContent"></div>
                <button className="menuBtn">☰</button>
            </div>
        )
    }
}

export default Footer;