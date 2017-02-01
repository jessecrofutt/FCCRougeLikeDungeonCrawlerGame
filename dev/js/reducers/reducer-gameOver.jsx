import * as types from '../actions/index';

const gameOverReducer = (state, action) => {
    state = state || false;

    switch (action.type) {

        case "GAME_OVER":
                    //console.log('GAME_OVER ');
            return action.condition
            break;
        default:
            return state
    }
}
export default gameOverReducer;

