import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import howler from 'howler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-bootstrap';

import {updateArrayAction} from '../actions/index';
import {updateEnemyAction} from '../actions/index';
import {updatePlayerPosition} from '../actions/index';
import {updateWindowOrigin} from '../actions/index';
import {playerMove} from '../actions/index';
import {updateGameData} from '../actions/index';
import {showModal} from '../actions/index';

import GameOver from './gameOver';
import Grid from './grid';
import Map from './map';
import NextLevel from './nextLevel';
import SideDisplay from './sideDisplay';
import Intro from './intro';
import Credits from './credits';

let bossLocation  = [];
var playerLocation = [];
let gameLevel = 1;
let difficulty = gameLevel * 10;
let newXBegin = 0;
let newYBegin = 0;
let enemies = [];
let health = [];
let weapon = [];

let bossThemeSound1 = new Howl({
    src: 'self' ['./sounds/enemyTheme1.mp3'],
    loop: true,
    volume: 0.3
});
let bossThemeSound2= new Howl({
    src: 'self' ['./sounds/enemyTheme2.mp3'],
    loop: true,
    volume: 0.5
});
let bossThemeSound3 = new Howl({
    src: 'self' ['./sounds/enemyTheme3.mp3'],
    loop: true,
    volume: 0.4
});
let coffeeSound = new Howl({
    src: 'self' ['./sounds/coffeeSounds.mp3'],
    volume: 0.4
});
let eatingSound = new Howl({
    src: 'self' ['./sounds/eatingSound.mp3'],
    volume: 0.4
});
let explosionSound = new Howl({
    src: 'self' ['./sounds/explosion.mp3'],
    volume: 1
});
let gameOverSound = new Howl({
    src: 'self' ['./sounds/gameOver.mp3'],
    volume: 1
});
let girlLaughSound = new Howl({
    src: 'self' ['./sounds/girlLaugh.mp3'],
    volume: 1
});
let natureSound = new Howl({
    src: 'self' ['./sounds/natureSound.mp3'],
    volume: 0.2
});
let punchingSound = new Howl({
    src: 'self' ['./sounds/punch1.mp3'],
    volume: 0.8
});
let sunshineSound = new Howl({
    src: 'self' ['./sounds/sunshineSound.mp3'],
    volume: 0.2
});
let potionSound = new Howl({
    src: 'self' ['./sounds/potionSound.mp3'],
    volume: 0.2
});
let searchingSound1 = new Howl({
    src: 'self' ['./sounds/searchingSound1.mp3'],
    loop: true,
    volume: 0.4
});
let searchingSound2 = new Howl({
    src: 'self' ['./sounds/searchingSound2.mp3'],
    loop: true,
    volume: 0.4
});
let searchingSound3 = new Howl({
    src: 'self' ['./sounds/searchingSound3.mp3'],
    loop: true,
    volume: 0.4
});
let screamSound = new Howl({
    src: 'self' ['./sounds/scream.mp3'],
    volume: 0.7
});
let weaponPickupSound = new Howl({
    src: 'self' ['./sounds/weaponPickup.mp3'],
    volume: 0.2
});
let winningThemeSound = new Howl({
    src: 'self' ['./sounds/winningTheme.mp3'],
    volume: 0.4,
    loop: true
});

class Game extends Component {

    componentWillMount() {
        //this.props.showModal("intro", true);
        this.setupGame(1);
        this.state = {width: 800};
    }

    componentDidMount(){
        //this.setState({width: window.innerWidth});
    }

    render() {
        return (
            <div className = "container"
                 id = "main">
                <div ref = "gameArea"
                     id = "page"
                     className="container"
                     onKeyDown={(event) => this.handleKeyPress(
                                        event.key,
                                        this.props.gameArray,
                                        this.props.playerPosition
                                        )}>
                    <h1>Escape From Nerd Hell</h1>
                    <div ref = "mainDisplayArea"
                         id = "mainDisplayArea"
                         tabIndex ={0}>
                        <SideDisplay
                        />
                        <div className="gridArea"
                             ref= "gridArea"
                             tabIndex ={0}
                        >
                            <Grid className="grid"
                                  ref= "grid"
                                  tabIndex ={0}
                                  rows={this.props.game.rows/3}
                                  columns={this.props.game.columns/3}
                                  windowOrigin = {this.props.windowOrigin}
                                  innerWidth = {this.state.width}
                                  >
                            </Grid>
                        </div>
                    </div>
                </div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.props.showModal("showMap", true)}>
                        View Map
                </Button>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.props.showModal("credits", true)}>
                    Credits
                </Button>
                <div id="bottomMatter">
                </div>
                <div className="modal-container">
                    <Intro
                        id="intro"
                        setupGame = {() => this.setupGame(1)}
                    />
                    <Map
                        id="map"
                        rows={this.props.game.rows}
                        columns={this.props.game.columns}
                        backdrop = "static"
                    />
                    <GameOver   id="gameOver"
                                setupGame = {() => this.setupGame(1)}/>
                    <NextLevel   id="nextLevel"
                                setupGame = {() => this.setupGame(gameLevel + 1)}/>
                    <Credits id = "credits"
                    />

                </div>
            </div>
        );
    }

    getViewWindow(locationArray){

        console.log('locationArray: ' + locationArray);
        let playerX = locationArray[0];
        console.log('playerX: ' + playerX);
        let playerY = locationArray[1];
        console.log('playerY: ' + playerY);

            //determine position of window beginning on x axis
        if (playerX < 9) {
            newXBegin = 0;
        } else if (playerX > 36) {
            newXBegin = 30;
        } else {
            newXBegin = playerX - 7;
        }
            //determine position of window beginning on y axis
        if (playerY < 7) {
            newYBegin = 0;
        } else  if (playerY > 27) {
            newYBegin = 22;
        } else {
            newYBegin = playerY - 5;
        }
        console.log('newXBegin: ' + newXBegin);
        console.log('newYBegin: ' + newYBegin);
        this.props.updateWindowOrigin([newXBegin, newYBegin]);
    }

    setupGame(currentLevel) {
        winningThemeSound.stop();
        this.props.showModal("gameOver", false);
        this.props.showModal("nextLevel", false);
        this.props.showModal("intro", false);

        gameLevel = currentLevel || gameLevel;
        let levelData = 'gameLevel';

        this.props.updateGameData(gameLevel, levelData);
        this.props.updateGameData(1, "weaponMulitplier");

        let columns = this.props.game.columns;
        let rows = this.props.game.rows;
        let cleanBoardArray = [];
        let mapWithRooms = [];
        let population = 0;

        for (let i = 0; i < columns; i++) {
            cleanBoardArray.push([]);
            for (let j = 0; j < rows; j++) {
                let cellContents =  0;
                let unUsed = 0;
                cleanBoardArray[i].push([cellContents, unUsed]);
            }
        }

        mapWithRooms = this.getRooms(cleanBoardArray);

        this.props.updateArrayAction(mapWithRooms);
        this.props.updateGameData("searching", "status");

        if (gameLevel == 1) {
            this.props.updateGameData("feeble hands", "weapon");
            this.props.updateGameData(100, "health");
        } else {
            this.props.updateGameData(this.props.status.weapon, "weapon");
            this.props.updateGameData(this.props.health, "health");
            this.props.updateGameData(100, "health");
        }
    }

    getRooms (roomlessMap, startingXPos = 1, startingYPos = 1) {

        let rows = roomlessMap.length;
        let columns = roomlessMap[0].length;

        let heightTolerance = 0;
        let widthTolerance = 0;

        let roomlessMapToSend = roomlessMap.slice();

        let finishedMap = roomlessMap.slice();

            //these loops generate larger cells and place randomly sized rooms within them
        let lastStartingXPos = 1;
        let lastEndingXPos = 1;
        let lastStartingYPos = 1;
        let lastEndingYPos = 1;
        let hallHeight = 0;
        let yTunnelPlacementRange = 0;
        let xTunnelPlacementRange = 0;
        let totalRooms = 16;
        let obstacleArrayForPlacement = [17,18];

        const generateRandomPlacement = () => {
            return  Math.floor(Math.random() * totalRooms);
        }

        const getRandomNumberForPlacement = () => {
            let occupied = false;
            let randy = 0;
            do {
                randy = generateRandomPlacement();
                obstacleArrayForPlacement.forEach(function (element) {
                    if (randy == element) {
                        occupied = true;
                    }
                });
            } while (occupied == true);
            obstacleArrayForPlacement.push(randy);
            return randy;
        }

        let randomPlayerPlacement = generateRandomPlacement();
        let randomBossPlacement = generateRandomPlacement();
        let randomWeaponPlacement = generateRandomPlacement();


        let roomCount = 0;
        let player = [];
        let boss = [];
        let weapon = [];

        for (let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                let roomHeight  = Math.ceil(Math.random() * 5 +2);
                let roomLength  = Math.ceil(Math.random() * 7 +3);
                startingYPos = (i * 8) + 1;
                startingXPos = (j * 11) + 1;

                if (j == 1 || j == 2) {startingXPos = startingXPos + Math.round((10 - roomLength)/2) ;}
                if (i == 1 || i == 2) {startingYPos = startingYPos + Math.round((7 - roomHeight)/2) ;}


                if (j == 3) {startingXPos = startingXPos + (10 - roomLength) ;}
                if (i == 3) {startingYPos = startingYPos + (7 - roomHeight) ;}

                let placeBoss = (randomBossPlacement === roomCount) ?  true :  false;
                        console.log('placeBoss: ' + placeBoss);
                let placeWeapon = (randomWeaponPlacement === roomCount) ?  true :  false;
                        console.log('placeBoss: ' + placeWeapon);
                let placePlayer = (randomPlayerPlacement === roomCount) ?  true :  false;
                        console.log('placePlayer: ' + placePlayer);
                finishedMap = this.getRoom(finishedMap, roomHeight, roomLength, startingXPos, startingYPos,
                    placePlayer, placeBoss, placeWeapon);

                let hallLength = 0;
                let hallWidth = 1;

                if (lastEndingXPos > 1 && j < 4  ) {
                    hallLength = startingXPos - lastEndingXPos;
                    let lowerYBound = (lastStartingYPos > startingYPos) ? lastStartingYPos : startingYPos;
                    let upperYBound = (lastEndingYPos < startingYPos + roomHeight ) ? lastEndingYPos : startingYPos + roomHeight;
                    yTunnelPlacementRange = lowerYBound + Math.floor(Math.random() * (upperYBound - lowerYBound));
                    finishedMap = this.getRoom(  finishedMap, 1, hallLength, lastEndingXPos, yTunnelPlacementRange);
                }

                lastStartingXPos = startingXPos;
                lastEndingXPos = startingXPos + roomLength;
                lastStartingYPos = startingYPos;
                lastEndingYPos = startingYPos + roomHeight;
                roomCount++
            }

            if (i < 3) {
                hallHeight = 9;

                let randomFourth = Math.floor(Math.random() * 4) * 11 + 4;
                let randomFourth2 = Math.floor(Math.random() * 4) * 11 + 4;

                if ((randomFourth > 5) && (randomFourth < 10)) {
                    randomFourth -= 5;
                }
                if ((randomFourth > 34) && (randomFourth < 39)) {
                    randomFourth += 5;
                }
                if ((randomFourth2 > 5) && (randomFourth2 < 10)) {
                    randomFourth2 -= 5;
                }
                if ((randomFourth2 > 34) && (randomFourth2 < 39)) {
                    randomFourth2 += 5;
                }

                let xPos = randomFourth;
                let xPos2 = randomFourth2;

                let yPos = 4 + 8 * i;
                let yPos2 = 4 + 8 * i;

                finishedMap = this.getRoom(finishedMap, hallHeight, 1, xPos, yPos);
                finishedMap = this.getRoom(finishedMap, hallHeight, 1, xPos2, yPos2);
            }
        }
        return finishedMap;
    }

    getRoom (map, maxHeight, maxWidth, startingXPos, startingYPos, player, boss , weapon) {

        console.log('entering getRandomRooms function ' + 'map' , maxHeight, maxWidth, startingXPos, startingYPos);

        let roomingMap = map.slice();
        let count = 0;
        let occupantArray = [21,22];
        let totalCells = maxHeight * maxWidth;

        var generateRandom = function(){
            return  Math.floor(Math.random() * totalCells) + 1;
        }
            //generate a random cell location
        const getRandomNumber = () => {
            let occupied = false;
            let randy = 0;
            do {
                randy = generateRandom();
                occupantArray.forEach(function (existingRandom) {
                    if (randy == existingRandom) {
                        occupied == true;
                    }
                });
            } while (occupied === true);
            occupantArray.push(randy);
            return randy;
        }

        let randomHealth = getRandomNumber();
        let randomWeapon = getRandomNumber();
        let randomEnemy = getRandomNumber();


            //loop through room cells placing enemies when
            // their assigned random numbers match the room count
        for (let j = startingYPos; j < (startingYPos + maxHeight); j++) {
            for (let i = startingXPos; i < (startingXPos + maxWidth); i++) {
                    //"1" is the default empty cellContent
                let cellContents = 1;
                let unUsed = 0;
                count ++;

                if (maxHeight > 1 && maxWidth > 1) {
                        //place enemies in rooms
                    if (randomEnemy == count) {
                        if (boss) {
                            cellContents = gameLevel + 9;
                            bossLocation = [i , j];
                            enemies.push([i , j, 200, cellContents]);
                        } else {
                            let enemyWeight = Math.floor(Math.random() * 3 + 6);
                            cellContents = enemyWeight;
                            enemies.push([i , j, 100, cellContents]);
                        }

                    }
                        //place player or health items in rooms
                    if (randomHealth == count) {
                        if (player) {
                            cellContents = 3
                            playerLocation = [i , j];
                            this.getViewWindow(playerLocation);
                            this.props.updateGameData(0, 'experience');
                            this.props.updateGameData(0, 'health');

                        } else {
                            cellContents = 30 + Math.floor(Math.random() * 3);
                            health.push([i,j]);
                        }
                    }
                        //place weapons or other items in rooms
                    if (randomWeapon == count) {
                        if (weapon) {
                            switch(gameLevel){
                                case 1:
                                    cellContents = 20
                                    break;
                                case 2:
                                    cellContents = 21
                                    break;
                                case 3:
                                    cellContents = 22
                                    break;

                            }
                        }
                        //weapon.push([i , j, 100, cellContents]);
                    }
                }
                roomingMap[i][j] = [cellContents, unUsed];
            }
        }
            //send player location array and enemy array to redux store
        this.props.updatePlayerPosition(playerLocation);
        this.props.updateEnemyAction(enemies);
        return roomingMap;
    }

    handleKeyPress(event, currentGameArray, currentPos){
        currentPos = currentPos || 0;

        let action = '';
        let prevX = currentPos[0];
        let prevY = currentPos[1];
        let curX = currentPos[0];
        let curY = currentPos[1];
        let moved = false;

        //this.stopSound("bossThemeSound"+gameLevel);
        this.playSound("searchingSound"+gameLevel);

        switch(event){
            case "ArrowLeft":
                if (currentGameArray[curX -1][curY][0] === 1) {
                    curX -= 1;
                    moved = true;
                    this.props.updateGameData("searching", "status");
                    this.props.updateGameData(0, "enemyHealth");

                } else if ((currentGameArray[curX -1][curY][0] === 0)){
                    moved = moved;
                    this.props.updateGameData("kissing wall", "status");

                } else {
                    console.log('dealWithObstacle at: ' + currentGameArray[curX -1][curY][0]);
                    moved = this.dealWithObstacle(currentGameArray[curX -1][curY][0], [curX - 1, curY] );
                    if (moved) {
                        curX -= 1;
                    }
                }
                break;

            case "ArrowUp":
                if (currentGameArray[curX][curY-1][0] === 1){
                    curY -=1 ;
                    moved = true;
                    this.props.updateGameData("searching", "status");
                    this.props.updateGameData(0, "enemyHealth");

                } else if ((currentGameArray[curX][curY-1][0] === 0)){
                    moved = moved;
                    this.props.updateGameData("kissing wall", "status");

                } else {
                    console.log('dealWithObstacle at: ' + currentGameArray[curX][curY-1][0]);
                    moved = this.dealWithObstacle(currentGameArray[curX][curY-1][0], [curX, curY -1]);
                    if (moved) {
                        curY -= 1;
                    }
                }
                break;

            case "ArrowRight":
                if (currentGameArray[curX + 1][curY][0] === 1){
                    curX += 1;
                    moved = true;
                    this.props.updateGameData("searching", "status");
                    this.props.updateGameData(0, "enemyHealth");

                } else if ((currentGameArray[curX + 1][curY][0] === 0)){
                    moved = moved;
                    this.props.updateGameData("kissing wall", "status");

                } else {
                    console.log('dealWithObstacle at: ' + currentGameArray[curX + 1][curY][0]);
                    moved = this.dealWithObstacle(currentGameArray[curX + 1][curY][0], [curX + 1, curY]);
                    if (moved) {
                        curX += 1;
                    }
                }
                break;

            case "ArrowDown":
                if (currentGameArray[curX][curY + 1][0] === 1){
                    curY += 1;
                    moved = true;
                    this.props.updateGameData("searching", "status");
                    this.props.updateGameData(0, "enemyHealth");

                } else if ((currentGameArray[curX][curY + 1][0] === 0)){
                    moved = moved;
                    this.props.updateGameData("kissing wall", "status");

                } else {
                    console.log('dealWithObstacle at: ' + currentGameArray[curX][curY + 1][0]);
                    moved = this.dealWithObstacle(currentGameArray[curX][curY + 1][0], [curX, curY + 1]);
                    if (moved) {
                        curY += 1;
                    }
                }
                break;
        }
        console.log('posX: ' + curX);
        let newGameArray = currentGameArray.slice();

        console.log('posY: ' + curY);
        if (moved === true) {
            newGameArray[curX][curY][0] = 3;
            newGameArray[prevX][prevY][0] = 1;
        }


        let nextPosition = [curX, curY];
        this.getViewWindow(nextPosition);

        console.log('newGameArray[posX][posY][0] = 4;: ' + newGameArray[curX][curY][0]);


        console.log('newGameArray[OposX][OposY][0] = 1: ' + newGameArray[prevX][prevY][0]);
        //console.log('newGameArray[currentPosX][currentPosY][0] = 1: ' + newGameArray[currentPosX][currentPosY][0]);
        this.props.playerMove(nextPosition, newGameArray);
        this.props.updateArrayAction(newGameArray);

    }

    dealWithObstacle(obstacle, location){
        let moveForward = false;
        switch (obstacle) {

            case 4:
                moveForward = this.fightEnemy(location);
                break;
            case 5:
                break;
            case 6:
                moveForward = this.fightEnemy(location);
                break;
            case 7:
                moveForward = this.fightEnemy(location);
                break;
            case 8:
                moveForward = this.fightEnemy(location);
                break;
            case 10:
                moveForward = this.fightBoss(location, 1);
                break;
            case 11:
                moveForward = this.fightBoss(location, 2);
                break;
            case 12:
                moveForward = this.fightBoss(location, 3);
                if(moveForward == true) {
                    this.props.updateGameData("You have defeated SportsDad", "gameStatus");
                    this.gameOver();
                    winningThemeSound.play();

                }
                break;
            case 20:
                weaponPickupSound.play();
                this.props.updateGameData("glasses", "weapon");
                this.props.updateGameData(obstacle - 19 + gameLevel, "weaponMulitplier");
                this.props.updateGameData("picked up \n glasses", "status");
                moveForward = true;
                break;
            case 21:
                weaponPickupSound.play();
                this.props.updateGameData("picked up \n a mechanical pencil", "status");
                this.props.updateGameData(obstacle - 19 + gameLevel, "weaponMulitplier");
                this.props.updateGameData("mechanical pencil", "weapon");
                moveForward = true;
                break;
            case 22:
                weaponPickupSound.play();
                this.props.updateGameData("picked up \n a TI-83", "status");
                this.props.updateGameData(obstacle - 19 + gameLevel, "weaponMulitplier");
                this.props.updateGameData("TI-83", "weapon");
                moveForward = true;
                break;

            case 30:
                searchingSound1.volume(0.2);
                moveForward = this.addHealth(20, 'coffee');
                coffeeSound.play();
                break;
            case 31:
                moveForward = this.addHealth(40, 'burrito');
                eatingSound.play();
                break;
            case 32:
                moveForward = this.addHealth(60, 'potion');
                potionSound.play();
                break;
        }

        return moveForward;
    }

    fightEnemy(location) {
        punchingSound.play();
        let enemyArray = this.props.enemies.slice();
        let index = 0;
        //find the index of a particular enemy in enemyArray
        for(var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i][0] == location[0]) {
                if (enemyArray[i][1] == location[1]){
                    index = i;
                }
            }
        }
        //updateGameData won't accept a string as second arguement??
        let enemyHealthData = 'enemyHealth';
        let enemyLevelData = 'enemyLevel';
        let enemyTypeData = 'enemyType';

        //fetch healthPoints from enemyArray
        let enemyHealth = enemyArray[index][2];
        let enemyLevel = enemyArray[index][3];
        let enemyType = '';
        let playerDamage =  0;
        switch (enemyLevel) {
            case 6:
                enemyType = 'nature';
                playerDamage =  -10;
                break;
            case 7:
                enemyType = 'sunshine';
                playerDamage =  -15;
                break;
            case 8:
                enemyType = 'a girl';
                playerDamage =  -20;
                break;
            case 10:
                enemyType = 'your gym teacher';
                playerDamage = -50;
                break;
            case 11:
                enemyType = 'a meathead';
                playerDamage = -50;
                break;
            case 12:
                enemyType = 'sports dad';
                playerDamage = -50;
                break;

        }
        playerDamage *= gameLevel;

        this.props.updateGameData("fighting " + enemyType, "status");
        this.props.updateGameData(enemyHealth, enemyHealthData);
        this.props.updateGameData(enemyLevel, enemyLevelData);
        this.props.updateGameData(enemyType, enemyTypeData);

        let enemyDamage = (this.props.experience + this.props.status.weaponMulitplier * 5 + 10);
        let randomEnemyDamage = (Math.ceil(enemyDamage * Math.random() * 10/difficulty));
        let newEnemyHealth = Math.round(enemyHealth - enemyDamage - randomEnemyDamage);
            //prevent negative numbers
        if (newEnemyHealth < 0) newEnemyHealth = 0;
        enemyArray[index][2] = newEnemyHealth;

        this.props.updateGameData(newEnemyHealth, enemyHealthData);
        this.props.updateEnemyAction(enemyArray);

            //test for defeat of enemy
        if (newEnemyHealth < 1) {

            explosionSound.play();
            this.props.updateGameData("enemy defeated", "status");
            this.addExperience();
            return true;

        } else {
                //play enemy attck sound
            switch(enemyLevel){
                case 6:
                    natureSound.play();
                    break;
                case 7:
                    sunshineSound.play();
                    break;
                case 8:
                    girlLaughSound.play();
                    break;
                case 10:

                    break;
                case 11:

                    break;
                case 12:

                    break;
            }
            let randomPlayerDamage = (Math.ceil(playerDamage * Math.random() * difficulty/10));
            this.addHealth(playerDamage + randomPlayerDamage);
            return false;
        }

    }

    fightBoss(location, level) {
        this.stopSound("searchingSound"+gameLevel);
        this.playSound("bossThemeSound"+gameLevel);
        let victory = this.fightEnemy(location);
        if (victory  == true) {
            this.addExperience();
            this.addExperience();
            this.addExperience();
            if (gameLevel < 3) {
                this.nextLevel();
            }
        }
        return victory;
    }

    addHealth(amount, type) {

        let newHealth = this.props.health;
        let dataType  = 'health';
        newHealth += amount;

        if (type == 'coffee') {
            this.props.updateGameData("drinking coffee", "status");
        } else if (type == 'burrito') {
            this.props.updateGameData("eating a burrito", "status");
        } else if (type == 'potion') {
            this.props.updateGameData("drinking potion", "status");
        }

        if (newHealth > 0) {
            this.props.updateGameData(newHealth, dataType);
            return true;
        } else {
            screamSound.play();
            gameOverSound.play();
            this.props.updateGameData("You have been defeated", "gameStatus");
            this.gameOver();
            return false;
        }
    }

    addExperience() {

        let exp = this.props.experience;
        let dataType  = 'experience';
        console.log('this.props.experience: ' + this.props.experience);
        exp += 1;
        this.props.updateGameData(exp, dataType);

    }

    nextLevel() {
        this.stopSound("bossThemeSound"+gameLevel);
        this.props.updateGameData("You have beaten level: " + gameLevel , "status");
        this.props.showModal("nextLevel", true);
    }

    gameOver(){
        this.stopSound("bossThemeSound"+gameLevel);
        this.stopSound("searchingSound"+gameLevel);
        this.props.updateGameData("You have been defeated", "status");
        this.props.updateGameData(gameLevel , "gameLevel");
        this.props.showModal("gameOver", true);

    }

    playSound(sound) {
        switch(sound) {
            case "searchingSound1":
                if (!searchingSound1.playing()) {
                    searchingSound1.play();
                }
                break;
            case "searchingSound2":
                if (!searchingSound2.playing()) {
                    searchingSound2.play();
                }
                break;
            case "searchingSound3":
                if (!searchingSound3.playing()) {
                    searchingSound3.play();
                }
                break;
            case "bossThemeSound1":
                if (!bossThemeSound1.playing()) {
                    bossThemeSound1.play();
                }
                break;
            case "bossThemeSound2":
                if (!bossThemeSound2.playing()) {
                    bossThemeSound2.play();
                }
                break;
            case "bossThemeSound3":
                if (!bossThemeSound3.playing()) {
                    bossThemeSound3.play();
                }
                break;
        }
    }

    stopSound(sound) {
        switch(sound) {
            case "searchingSound1":
                searchingSound1.stop();
                break;
            case "searchingSound2":
                searchingSound2.stop();
                break;
            case "searchingSound3":
                searchingSound3.stop();
                break;
            case "bossThemeSound1":
                bossThemeSound1.stop();
                break;
            case "bossThemeSound2":
                bossThemeSound2.stop();
                break;
            case "bossThemeSound3":
                bossThemeSound3.stop();
                break;

        }
    }
}

function mapStateToProps(state) {
    return {
        enemies: state.enemies,
        game: state.game,
        gameArray: state.gameArray,
        experience: state.experience,
        health: state.health,
        playerPosition: state.playerPosition,
        showGameOver: state.showGameOver,
        showMap: state.showMap,
        status: state.status,
        windowOrigin: state.windowOrigin
    };
}

function matchDispatchToProps(dispatch) {

        return bindActionCreators({
            playerMove: playerMove,
            showModal: showModal,
            updateArrayAction: updateArrayAction,
            updateEnemyAction: updateEnemyAction,
            updateGameData: updateGameData,
            updatePlayerPosition: updatePlayerPosition,
            updateWindowOrigin: updateWindowOrigin
        }, dispatch)

}


export default connect(mapStateToProps, matchDispatchToProps)(Game);