import React from 'react';
import SkillComponent from '../components/skills/skills'
import './techskill.css';


class TechSkillComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>
            <SkillComponent searchId={this.props.match.params.id}/>
        </div>
        );
    }
}

export default TechSkillComponent;