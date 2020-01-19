import React from 'react';
import './skills.css';

class SkillComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const searchTerm = this.props.txt;
        const txt = this.props.discription;
        return (
            <div>
                <p>{searchTerm}</p>
                <pre>{txt}</pre>
            </div>
        );
    }
}

export default SkillComponent;