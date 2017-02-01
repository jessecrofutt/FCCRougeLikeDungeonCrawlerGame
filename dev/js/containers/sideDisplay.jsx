import React, {Component} from 'react';
import {connect} from 'react-redux';

class SideDisplay extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "sideDisplay">
                <div className = "sideDisplayData">
                    <h2>Level</h2>
                    <h3>{this.props.status.gameLevel}</h3>


                </div>
                <div className = "sideDisplayData">
                    <h2>Experience</h2>
                    <h3>{this.props.experience}</h3>


                </div>

                <div className = "sideDisplayData">
                    <h2>Health</h2>
                    <h3>{this.props.health}</h3>


                </div>
                <div className = "sideDisplayData">
                    <h2>Weapon</h2>
                    <h3>{this.props.status.weapon}</h3>


                </div>
                <div className = "sideDisplayData">
                    <h2>Status</h2>
                    <h3>{this.props.status.status}</h3>


                </div>
                <div className = "sideDisplayData">
                    <h2>Enemy</h2>
                    <h3>{this.props.status.enemyHealth}</h3>
                    

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        game: state.game,
        experience: state.experience,
        health: state.health,
        enemyHealth: state.enemyHealth,
        status: state.status,
        //updateGameLevel: state.updateGameLevel
    };
}
//function matchDispatchToProps(dispatch) {
//    return bindActionCreators({selectUser: selectUser}, dispatch)
//}

export default connect(mapStateToProps)(SideDisplay);
//export default connect(mapStateToProps, matchDispatchToProps)(Cell);