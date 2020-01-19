import { MENU_TOGGLE, MENU_LIST } from '../actions/communication';
import { TECHSKILLS } from '../data/techskills';

export const communicationReducer = (state = TECHSKILLS, action) => {
    switch(action.type) {
        case MENU_TOGGLE:
            return Object.assign({}, state, { show: action.toggleState });
        case MENU_LIST:
            return Object.assign({}, state, {     techSkills:  action.navList  });
        default:
            return state;
    }
}