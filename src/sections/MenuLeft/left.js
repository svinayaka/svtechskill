import React from 'react';
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import SearchComponent from '../../components/search/search-btn';
import './left.css';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techSkils: [
                { link: 'about', txt: 'About Me' },
                { link: 'html', txt: 'HTML' },
                { link: 'javaScript', txt: 'JavaScript' },
                { link: 'css', txt: 'CSS' }
            ],
            searchTerm : ''
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.searchedTerm = this.searchedTerm.bind(this);
    }
    searchedTerm(valSearched) { 
        this.setState({searchTerm : valSearched}); 
        this.render();
    }
    handleOnClick() { }
    render() {
        const techSkils = this.state.techSkils.filter(eachSkill => {
            if (this.state.searchTerm) {
                const searchTecList = eachSkill.txt.trim().toLowerCase();
                const searchedTerm = this.state.searchTerm.trim().toLowerCase();
                return (searchTecList.includes(searchedTerm)) ? true : false;
            } else {
                return true;
            }
        });
        return (
            <div className="menuContent">
                <div><SearchComponent leftContainer={this.searchedTerm}></SearchComponent></div>
                <ul className="Navigator">
                    {techSkils.map((row, index) => {
                        return (
                            <li key={index}><Link  to={'/'+row.link} onClick={this.handleOnClick}><button>{row.txt}</button></Link></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default LeftMenu;