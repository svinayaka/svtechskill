import React from 'react';
import { BrowserRouter as router, Route, Link, Redirect } from 'react-router-dom';
import AboutComponent from '../../about/about';
import TechSkillComponent from '../../techskills/techskill';
import './right.css';

class RightMenu extends React.Component {
    render() {
        return (
            <router className="mainRouter">
                <Redirect exact  from="/" to="/about"/>
                <Route path="/about" component={AboutComponent} />
                <Route path="/techskill/:id" component={TechSkillComponent} />
            </router>
        );
    }
}

export default RightMenu;