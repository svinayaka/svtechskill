import React from 'react';
import './search-btn.css';

class SearchComponent extends React.Component {
    render() {
        return  <input className="searchInput" type="text" placeholder="Search skills"/>;
    }
}

export default SearchComponent;