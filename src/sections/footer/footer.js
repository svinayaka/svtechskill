import React from 'react';
import Button from '../../components/button/button';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="menuContent">
                    <ul>
                        <li><button>JavaScript</button></li>
                        <li><button>React JS</button></li>
                    </ul>
                </div>
                <Button className="menuBtn"></Button>
            </div>
        )
    }
}

export default Footer;