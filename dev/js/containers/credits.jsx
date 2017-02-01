import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import {showModal} from '../actions/index';

class Credits extends React.Component {

    constructor(props) {
        super(props);
    }

    close() {
        this.props.showModal("credits", false);
    }

    render() {
        return (
            <div >
                <Modal show={this.props.showCredits}
                       onHide={() => this.close()}
                       dialogClassName="modal-credits">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>Credits</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Created with:
                            <br />
                            <a href="https://howlerjs.com/" target="_blank" >howler.js</a><br />
                            <a href="https://www.npmjs.com/" target="_blank" >npm</a><br />
                            <a href="https://facebook.github.io/react/" target="_blank" >React</a><br />
                            <a href="https://react-bootstrap.github.io/" target="_blank" >React-Bootstrap</a><br />
                            <a href="http://redux.js.org/docs/introduction/" target="_blank" >Redux</a><br />
                            <a href="https://webpack.github.io/" target="_blank" >Webpack</a><br />
                            by Jesse Crofutt</h2><br />
                        <Button
                            id = "buttonBegin"
                            bsStyle="primary"
                            bsSize="large"
                            onClick={() => this.props.showModal("credits", false)}
                        >
                            Close
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
        showCredits: state.showCredits,
        status: state.status
    };
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        showModal: showModal
    }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Credits);/**
 * Created by Hairy on 1/23/2017.
 */
