// import communicateReducer from '../../communicateReducer';  
import { communicationReducer } from '../reducers/communicateReducers';
import { MENU_TOGGLE, MENU_LIST } from '../actions/communication';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(communicationReducer);

export default store;