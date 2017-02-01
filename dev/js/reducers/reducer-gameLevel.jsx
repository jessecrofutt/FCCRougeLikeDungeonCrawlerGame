import * as types from '../actions/index';

const updateGameLevel = (state, action) => {
    state = state || 1;

    switch (action.type) {
        case "GAME_LEVEL":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                gameLevel: action.gameData
            })
            break;
        default:
            return state
    }
}

export default updateGameLevel;

