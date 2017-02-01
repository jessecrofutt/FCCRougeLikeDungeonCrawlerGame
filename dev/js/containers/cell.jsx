import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cell extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillMount() { }

    componentWillReceiveProps(){ }

    render() {

        let gameBoardArray = this.props.gameArray;
        let cellImageNum = gameBoardArray[this.props.cellIdx][this.props.cellIdy][0];
        let bgImage = '';
        let xDis = Math.abs(this.props.cellIdx - this.props.playerPosition[0]);
        let yDis = Math.abs(this.props.cellIdy - this.props.playerPosition[1]);
        let opacity = 1/Math.pow(((xDis + yDis)/2), 1.5);
        if (this.props.showMap == true) {
            opacity = 1/Math.pow(((xDis + yDis)), 0.15);
        }

        switch(cellImageNum){
            case 0:
                bgImage = 'url("./images/wall.png")';
                break;
            case 1:
                bgImage = 'url("./images/empty.png")';
                break;
            case 2:
                break;
            case 3:
                bgImage = 'url("./images/player.png")';
                break;
            case 4:
                bgImage = 'url("./images/enemy1.png")';
                break;
            case 5:
                break;
            case 6:
                bgImage = 'url("./images/nature.png")';
                break;
            case 7:
                bgImage = 'url("./images/sun.png")';
                break;
            case 8:
                bgImage = 'url("./images/girl.png")';
                break;
            case 10:
                bgImage = 'url("./images/gymTeacher.png")';
                break;
            case 11:
                bgImage = 'url("./images/meathead.png")';
                break;
            case 12:
                bgImage = 'url("./images/sportsDad.png")';
                break;
            case 20:
                bgImage = 'url("./images/glasses.png")';
                break;
            case 21:
                bgImage = 'url("./images/pencil.png")';
                break;
            case 22:
                bgImage = 'url("./images/calculator.png")';
                break;
            case 30:
                bgImage = 'url("./images/health1.png")';
                break;
            case 31:
                bgImage = 'url("./images/health2.png")';
                break;
            case 32:
                bgImage = 'url("./images/health3.png")';
                break;



        }

        let cellDimensions = (45/this.props.columns);
        const cellStyle = {
            opacity: opacity,
            height: cellDimensions + 'vw',
            width: cellDimensions + 'vw',
            backgroundImage: bgImage,
        };
        return (
            <div    style = {cellStyle}
                    className="cell"
            >
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        gameArray: state.gameArray,
        playerPosition: state.playerPosition,
        showMap: state.showMap
    };
}
//function matchDispatchToProps(dispatch) {
//    return bindActionCreators({selectUser: selectUser}, dispatch)
//}

export default connect(mapStateToProps)(Cell);
//export default connect(mapStateToProps, matchDispatchToProps)(Cell);