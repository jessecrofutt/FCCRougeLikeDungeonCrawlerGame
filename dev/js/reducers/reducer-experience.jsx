import * as types from '../actions/index';

const updateExperienceReducer = (state, action) => {
    state = state || 0;


    switch (action.type) {
        case "UPDATE_EXPERIENCE":
            //console.log('updateExperienceReducer triggered ');
            //console.log('action.experience: ' + action.gameData);
            return action.gameData
            break;
        default:
            return state
    }
}

export default updateExperienceReducer;

