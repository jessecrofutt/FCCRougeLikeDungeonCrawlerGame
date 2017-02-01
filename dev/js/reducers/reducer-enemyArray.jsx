/**
 * Created by Hairy on 1/5/2017.
 */
import * as types from '../actions/index';

const updateEnemyArrayReducer = (state = {}, action) => {
    //console.log('updateArrayReducer triggered ');

    switch (action.type) {
        case "UPDATE_ENEMIES":
            //return Object.assign({}, state, {
            //    gameArray: action.nextGameArray
            //})
            return action.nextEnemyArray;
            break;
        default:
            return state

    }
}
export default updateEnemyArrayReducer;