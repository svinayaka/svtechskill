import React from 'react';
import { app } from '../../env-variabels/configuration';
import SearchComponent from '../../components/search/search-btn';
import HyperLink from '../../components/link/link';
import store from '../../redux/store/store';
import { MENU_LIST } from '../../redux/actions/communication';
import './left.css';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     techSkills: [
        //         { link: 'about', txt: 'About Me' }
        //     ],
        //     show: false,
        //     searchTerm : ''
        // }
        // store.subscribe(() => {
        //     this.setState(() => { 
        //         console.log(Object.assign({}, this.state, store.getState()));
        //         return  Object.assign({}, this.state, store.getState());
        //     });
        // })
        this.handleOnClick = this.handleOnClick.bind(this);
        this.searchedTerm = this.searchedTerm.bind(this);
    }
    componentWillMount(){ }
    componentDidMount() {
        this.getRouteList();
    }

    changeState() { }

    searchedTerm(valSearched) { 
        this.setState({searchTerm : valSearched}); 
    }
    
    async getRouteList() {
        const fetchData = await fetch(app.url + "svtechlink")
        const response = await fetchData.json();
        this.props.dispatch({
            type: MENU_LIST,
            navList: response.link
        })
    }
    handleOnClick() { }
    render() {
        const state = this.props.TECHSKILLS;
        const techSkills = state.techSkills.filter(eachSkill => {
            if (state.searchTerm) {
                const searchTecList = eachSkill.txt.trim().toLowerCase();
                const searchedTerm = state.searchTerm.trim().toLowerCase();
                return (searchTecList.includes(searchedTerm)) ? true : false;
            } else {
                return true;
            }
        });
        return (
            <div className="menuContent" style={state.show ? { 'display': 'block' } : { 'display': 'none' }}>
                <HyperLink links={techSkills}></HyperLink>
                <div><SearchComponent leftContainer={this.searchedTerm}></SearchComponent></div>
            </div>
        );
    }
}



export default LeftMenu;