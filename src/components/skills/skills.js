import React from 'react';
import './skills.css';

class SkillComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const searchTerm = this.props.searchId;
        return searchTerm;
    }
}

export default SkillComponent;