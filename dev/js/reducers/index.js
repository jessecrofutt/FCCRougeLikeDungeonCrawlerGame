import {combineReducers} from 'redux';
import player from './reducer-playerPosition';
import game from './reducer-game';
import playerPosition from './reducer-playerPosition';
import windowOrigin from './reducer-windowOrigin';
import gameArray from './reducer-gameArray';
import enemies from './reducer-enemyArray';
import health from './reducer-health';
import experience from './reducer-experience';
import showIntro from './reducer-showIntro';
import showCredits from './reducer-showCredits';
import status from './reducer-status';
import showGameOver from './reducer-gameOver';
import showNextLevel from './reducer-nextLevel';
import showMap from './reducer-showMap';

const allReducers = combineReducers({
    game,
    gameArray,
    playerPosition,
    health,
    experience,
    enemies,
    status,
    showCredits,
    showIntro,
    showMap,
    showGameOver,
    showNextLevel,
    windowOrigin,
});

export default allReducers;
