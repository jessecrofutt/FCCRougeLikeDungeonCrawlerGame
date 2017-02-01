import * as types from '../actions/index';

const showMapReducer = (state, action) => {
    state = state || false;

    //console.log('SHOW_MAP reducer: ' + 'action.condition: ' +action.condition);


    switch (action.type) {
        case "SHOW_MAP":
                    //console.log('SHOW_MAP ');
            return action.condition
            break;
        default:
            return state
    }
}
export default showMapReducer;

