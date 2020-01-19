import { connect } from 'react-redux';
import App from '../../App';

const mapStateToProps = (state) => {
    return {
        TECHSKILLS: state
    };
}

const CONNECTOR = connect(mapStateToProps)(App);

export default CONNECTOR;