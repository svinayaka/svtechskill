import { MENU_TOGGLE, MENU_LIST, ABOUT } from '../actions/communication';
import { TECHSKILLS } from '../data/techskills';

export const communicationReducer = (state = TECHSKILLS, action) => {
    switch(action.type) {
        case MENU_TOGGLE:
            return Object.assign({}, state, { show: action.toggleState });
        case MENU_LIST:
            return Object.assign({}, state, { techSkills:  action.navList });
        case ABOUT:
            return Object.assign({}, state, {}, { about: action.about}); 
        default:
            return state;
    }
}