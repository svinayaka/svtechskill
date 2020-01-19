import React from 'react';
import Button from '../../components/button/button';
import { MENU_TOGGLE } from '../../redux/actions/communication';
import store from '../../redux/store/store';
import './footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.captureToggleStatus = this.captureToggleStatus.bind(this);
    }
    captureToggleStatus(toggleBtn) {
        // A dispatched action object...
        store.dispatch({
            type: MENU_TOGGLE,
            toggleState: toggleBtn
        })
    }
    render() {
        return (
            <div className="footer">
                <Button className="" {...this.props} data-class="menuBtn" onToggle={this.captureToggleStatus}></Button>
            </div>
        )
    }
}



export default Footer;