import React from 'react';
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import JavaScriptComponent from '../../techskills/javascript';
import CSSComponent from '../../techskills/css';

class RightMenu extends React.Component {
    render() {
        return (
            <router>
                <Route path="/javascript" component={JavaScriptComponent} />
                <Route path="/css" component={CSSComponent} />
            </router>
        );
    }
}

export default RightMenu;