import React from 'react';
import Button from '../../components/button/button';
import './footer.css';

class Footer extends React.Component {
    
    render() {
        return (
            <div className="footer">
                <Button className="menuBtn"></Button>
            </div>
        )
    }
}

export default Footer;