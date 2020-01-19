import React, { Fragment } from 'react';
import LeftMenu from '../MenuLeft/left';
import RightMenu from '../MenuRight/right';
import './container.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menuHolder">
                <LeftMenu {...this.props}></LeftMenu>
                <RightMenu {...this.props}></RightMenu>
            </div>
        );
    }
}

export default Container;

