/**
 * Created by Hairy on 1/5/2017.
 */
import * as types from '../actions/index';

//let cleanBoardArray = [];
//
//for (var i = 0; i < 20; i++) {
//    cleanBoardArray.push([]);
//    for (var j = 0; j < 15; j++) {
//        cleanBoardArray[i].push([0, 0]);
//    }
//}

const updateArrayReducer = (state = {}, action) => {
    //console.log('updateArrayReducer triggered ');

    switch (action.type) {
        case "UPDATE_ARRAY":
            //return Object.assign({}, state, {
            //    gameArray: action.nextGameArray
            //})
            return action.nextGameArray;
            break;
        //case "PLAYER_MOVE":
        //    return action.newGameArray;
        //    break;
        default:
            return state

    }

}
export default updateArrayReducer;