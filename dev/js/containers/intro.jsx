import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import {showModal} from '../actions/index';


class Intro extends React.Component {

    constructor(props) {
        super(props);
    }

    close() {
        this.props.showModal("intro", false);
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showIntro}
                       onHide={() => this.close()}
                       dialogClassName="modal-intro">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>Escape from Nerd Hell</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Use the Arrow Keys to navigate.</h2>
                        <h2>Defeat Enemies to gain experience. Collect health
                        items and weapons for your ultimate battle with Sports Dad.</h2>
                        <br/>
                        <Button
                            tabIndex ={0}
                            id = "buttonBegin"
                            bsStyle="primary"
                            bsSize="large"
                            onClick={() => this.props.setupGame()}
                        >
                            Begin
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
        showIntro: state.showIntro,
        status: state.status
    };
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        showModal: showModal
    }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Intro);/**
 * Created by Hairy on 1/23/2017.
 */
