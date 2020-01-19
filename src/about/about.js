import './about.css';
import React from 'react';
import store from '../redux/store/store';
import { ABOUT } from '../redux/actions/communication';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fetchUsers = this.fetchUsers.bind(this);
        store.subscribe(this.bindToState.bind(this));
    }

    bindToState() {
        const state = store.getState();
    }

    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers() { 
        fetch(`https://svnodeservices.herokuapp.com/`)
        .then(response => response.json())
        .then((resp) => {
            store.dispatch({
                type: ABOUT,
                about: resp.about
            })
        });
    }
    render() {
        const state = store.getState();
        const props = { ...state, ...this.props };
        return (
        <div>
            <h4>About Me</h4>
            <p>{props.about}</p>
        </div>
        );
    }
}

export default AboutComponent;