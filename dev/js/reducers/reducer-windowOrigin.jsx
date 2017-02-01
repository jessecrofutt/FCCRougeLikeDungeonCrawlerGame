import * as types from '../actions/index';

const updateWindowOriginReducer = (state, action) => {
    state = state || [];
    //console.log('update array reducer triggered ');

    switch (action.type) {

        case "WINDOW_ORIGIN":
            //console.log('action.nextPosition: ' + action.nextPosition);
            return action.nextPosition;
            break;
        default:
            return state;
    }
}
export default updateWindowOriginReducer;