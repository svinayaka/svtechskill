import React from 'react';
import Button from '../../components/button/button';
import { MENU_TOGGLE } from '../../redux/actions/communication';
import store from '../../redux/store/store';
import './footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: true
        }
        this.captureToggleStatus = this.captureToggleStatus.bind(this);
    }
    captureToggleStatus(gotData) {
        this.setState({
            toggleMenu: gotData
        });
        // A dispatched action object...
        store.dispatch({
            type: MENU_TOGGLE,
            toggleState: gotData
        })
    }
    render() {
        const toggle = this.state.toggleMenu;
        return (
            <div className="footer">
                <Button className="" data-class="menuBtn" data-toggle={toggle} onToggle={this.captureToggleStatus}></Button>
            </div>
        )
    }
}



export default Footer;