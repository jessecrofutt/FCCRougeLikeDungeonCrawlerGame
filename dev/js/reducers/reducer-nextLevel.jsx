import * as types from '../actions/index';

const nextLevelReducer = (state, action) => {
    state = state || false;

    //console.log('GAME_OVER reducer: ' + 'action.condition: ' +action.condition);

    switch (action.type) {

        case "NEXT_LEVEL":
            //console.log('GAME_OVER ');
            return action.condition
            break;
        default:
            return state
    }
}
export default nextLevelReducer;

