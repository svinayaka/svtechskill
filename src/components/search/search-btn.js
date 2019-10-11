import React from 'react';
import './search-btn.css';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.searchTerm = this.searchTerm.bind(this);
        this.debounce = this.debounce.bind(this); 
    }
    debounce(fn, delay) {
        let execution = null;
        return (event) => {
            clearTimeout(execution);
            execution = setTimeout(() => { fn(event) }, delay) 
        }
    }
    searchTerm(event) { console.log(event) }
    render() {
        return  <input className="searchInput" type="text" placeholder="Search skills" onKeyUp={this.debounce(this.searchTerm, 1000)}/>;
    }
}

export default SearchComponent;