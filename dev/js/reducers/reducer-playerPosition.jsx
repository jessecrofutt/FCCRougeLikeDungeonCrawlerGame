import * as types from '../actions/index';

const updatePlayerPositionReducer = (state, action) => {
    state = state || [];
    //console.log('update array reducer triggered ');

    switch (action.type) {

        case "PLAYER_MOVE":
            //console.log('action.nextPosition: ' + action.nextPosition);

            return action.nextPosition;
            break;


        default:
            return state;

    }
}
export default updatePlayerPositionReducer;