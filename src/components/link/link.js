import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import './link.css';

class HyperLink extends Component {
    constructor(props) { 
        super(props); 
        this.eleRef = React.createRef();
    }

    //onClick={this.handleOnClick}
    navOnHover(event) {
        let liElm = event.target.parentElement.parentElement;
        if (liElm.nodeName === 'LI') {
            console.log(liElm);
        } 
    }

    render() {
        const techSkills = this.props.links;
        return (
            <ul className="Navigator">
                {
                    techSkills.map((row, index) => {
                        if (row.subLink) {
                            return (
                                <li key={index}>
                                    <Link to={'/'+row.link}  ref={this.eleRef} onMouseEnter={this.navOnHover}><button>{row.txt}</button></Link>
                                    <HyperLink links={row.subLink}></HyperLink>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index} >
                                    <Link to={'/'+row.link} onMouseEnter={this.navOnHover}><button>{row.txt}</button></Link>
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
