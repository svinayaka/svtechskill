import './about.css';
import React from 'react';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.state = {
            about: ''
        }
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers() { 
        fetch(`https://svnodeservices.herokuapp.com/`)
        .then(response => response.json())
        .then((resp) => {
            this.setState({
                about: resp.about,
            })
        });
    }
    render() {
        const about = this.state.about;
        return (
        <div>
            <h4>About Me</h4>
            <p>{about}</p>
        </div>
        );
    }
}

export default AboutComponent;