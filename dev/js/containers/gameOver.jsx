import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';

import {showModal} from '../actions/index';
import Grid from './grid';

class GameOver extends React.Component {

    constructor(props) {
        super(props);
    }

    close() {
        this.props.showModal("gameOver", false);
    }

    render() {

        return (
            <div>
                <Modal show={this.props.showGameOver} onHide={() => this.close()}
                       dialogClassName="modal-gameOver">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>{this.props.status.gameStatus}</h1>
                        </Modal.Title>
                    </Modal.Header>
                        <Modal.Body className = "gameOverBody">
                            <h1>Would you like to play again?</h1>
                            <Button
                                bsStyle="primary"
                                bsSize="large"
                                onClick={() => this.props.setupGame()}
                            >
                                Yes
                            </Button>
                            <Button
                                bsStyle="primary"
                                bsSize="large"
                                onClick = {() => this.close()}
                            >
                                No
                            </Button>
                        </Modal.Body>
                </Modal>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        game: state.game,
        gameArray: state.gameArray,
        showGameOver: state.showGameOver,
        status: state.status
    };
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        showModal: showModal
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(GameOver);