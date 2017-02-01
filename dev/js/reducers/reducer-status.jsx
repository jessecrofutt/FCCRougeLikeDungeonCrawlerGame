import * as types from '../actions/index';

const updateStatusReducer = (state = {}, action) => {
    //console.log('updateStatusReducer triggered ');

    switch (action.type) {
        case "STATUS":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                status: action.gameData
            })
            break;
        case "WEAPON":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                weapon: action.gameData
            })
            break;
        case "ENEMY_LEVEL":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                enemyLevel: action.gameData
            })
            break;
        case "ENEMY_TYPE":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                enemyType: action.gameData
            })
            break;
        case "ENEMY_HEALTH":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                enemyHealth: action.gameData
            })
            break;
        case "GAME_LEVEL":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                gameLevel: action.gameData
            })
            break;
        case "WEAPON_MULTIPLIER":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                weaponMulitplier: action.gameData
            })
            break;
        case "GAME_STATUS":
            //console.log('updateEnemyHealthReducer triggered ');
            //console.log('action.enemyHealthPoints: ' + action.gameData);
            return Object.assign({}, state, {
                gameStatus: action.gameData
            })
            break;
        default:
            return state
    }


}

export default updateStatusReducer;

