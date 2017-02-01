export const updateArrayAction = (nextGameArray) => {

    return {
        type: "UPDATE_ARRAY",
        nextGameArray
    }
}
export const updateEnemyAction = (nextEnemyArray) => {

    return {
        type: "UPDATE_ENEMIES",
        nextEnemyArray
    }
}

export const updateGameData = (gameData, dataType) => {

    let type = '';
    switch (dataType){
        case 'health':
            type = "UPDATE_HEALTH"
            break;
        case 'enemyHealth':
            type = "ENEMY_HEALTH"
            break;
        case 'experience':
            type = "UPDATE_EXPERIENCE"
            break;
        case 'status':
            type = "STATUS"
            break;
        case 'weapon':
            type = "WEAPON"
            break;
        case 'enemyLevel':
            type = "ENEMY_LEVEL"
            break;
        case 'enemyType':
            type = "ENEMY_TYPE"
            break;
        case 'gameLevel':
            type = "GAME_LEVEL"
            break;
        case 'weaponMulitplier':
            type = "WEAPON_MULTIPLIER"
            break;
        case 'gameStatus':
            type = "GAME_STATUS"
            break;
    }

    return {
        type: type,
        gameData
    }
}
export const showModal = (modalType, condition) => {
    let type = '';

    switch(modalType) {
        case 'showMap':
            type = "SHOW_MAP"
            break;
        case 'gameOver':
            type = "GAME_OVER"
            break;
        case 'nextLevel':
            type = "NEXT_LEVEL"
            break;
        case 'intro':
            type = "INTRO"
            break;
        case 'credits':
            type = "CREDITS"
            break;

    }
    console.log('modalType: ' +modalType + 'condition: ' +condition);
    return {
        type: type,
        condition
    }
}
export const playerMove = (nextPosition, newGameArray) => {

    return {
        type: "PLAYER_MOVE",
        newGameArray,
        nextPosition
    }
}
export const updatePlayerPosition = (playerLocation) => {

    let nextPosition = playerLocation.slice();

    return{
        type: "PLAYER_MOVE",
        nextPosition
    }
}
export const updateWindowOrigin = (originLocation) => {

    let nextPosition = originLocation.slice();

    return{
        type: "WINDOW_ORIGIN",
        nextPosition
    }
}
