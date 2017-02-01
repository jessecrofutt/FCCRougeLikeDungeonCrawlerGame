import * as types from '../actions/index';

const updateHealthReducer = (state, action) => {
    state = state || 0;



    switch (action.type) {
        case "UPDATE_HEALTH":
            //console.log('updateHealthReducer triggered ');
            //console.log('action.healthPoints: ' + action.gameData);
            return action.gameData
            break;
        default:
            return state
    }
}

export default updateHealthReducer;

