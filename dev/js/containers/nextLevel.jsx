import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from './grid';

import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import {showModal} from '../actions/index';

class NextLevel extends React.Component {

    constructor(props) {
        super(props);
    }

    close() {
        this.props.showModal("nextLevel", false);
    }


    render() {

        return (
            <div>
                <Modal show={this.props.showNextLevel} onHide={() => this.close()}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>You have destroyed the {this.props.status.enemyType}</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>Advance to next Level?</h1>
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
        showNextLevel: state.showNextLevel,
        status: state.status
    };
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        showModal: showModal
    }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(NextLevel);
