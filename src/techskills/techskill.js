import React from 'react';
import SkillComponent from '../components/skills/skills';
import store from '../redux/store/store';
import './techskill.css';

class TechSkillComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    findTechskills(techSkills, id) {
        let nestSkills = [];
        for(let initSkill = 0 ; initSkill < techSkills.length; initSkill++) {
            if (id.toUpperCase()=== techSkills[initSkill].txt.toUpperCase()) {
                const {link='', txt='', discription=[]} = techSkills[initSkill];
                return {link:link, txt: txt, discription: discription};
            } else if (techSkills[initSkill].subLink) { 
                nestSkills = nestSkills.concat(techSkills[initSkill].subLink);
            }
        }
        return (nestSkills.length > 0) ? this.findTechskills(nestSkills, id) : {};
    }
    render() {
        const state = store.getState();
        let props = { ...state, ...this.props };
        const id = props.match.params.id;
        const selectedPage = this.findTechskills(props.techSkills, id);
        props = { ...props, ...selectedPage };
        return (
            <div>
                <SkillComponent {...props}/>
            </div>
        );
    }
}

export default TechSkillComponent;