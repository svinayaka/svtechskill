import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './link.css';

class HyperLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            techSkills: this.props.links
        }
    }
    componentDidUpdate(previous) { 
        
    }
    componentWillUpdate() {
        
    }
    shouldComponentUpdate(previous, next) {
        if (previous.links.length !== next.techSkills.length){
            this.setState({
                techSkills: this.props.links
            })
        }
        return true;
    }
    render() {
        const techSkills = this.state.techSkills;
        return (
            <ul className="Navigator">
                {
                    techSkills.map((row, index) => {
                        if (row.subLink) {
                            return (
                                <li key={index}>
                                    <Link to={'/'+row.link} onClick={this.handleOnClick}><button>{row.txt}</button></Link>
                                    <HyperLink links={row.subLink}></HyperLink>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <Link to={'/'+row.link} onClick={this.handleOnClick}><button>{row.txt}</button></Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        );
    }
}
    
  

export default HyperLink;
