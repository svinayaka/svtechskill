import React from 'react';
import { BrowserRouter as router, Route, Link, Redirect } from 'react-router-dom';
import AboutComponent from '../../about/about';
import TechSkillComponent from '../../techskills/techskill';
import store from '../../redux/store/store';
import './right.css';

class RightMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <router className="mainRouter" >
                <Redirect exact  from="/" to="/about"/>
                <Route path="/about" props={this.props} component={AboutComponent} />
                <Route path="/techskill/:id" props={this.props} component={TechSkillComponent}  />
            </router>
        );
    }
}

//  this replaced by render Route

export default RightMenu;