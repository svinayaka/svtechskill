import React, { Fragment } from 'react';
import LeftMenu from '../MenuLeft/left';
import RightMenu from '../MenuRight/right';
import './container.css';

class Container extends React.Component {
    render() {
        return (
            <div className="menuHolder">
                <LeftMenu></LeftMenu>
                <RightMenu></RightMenu>
            </div>
        );
    }
}

export default Container;

