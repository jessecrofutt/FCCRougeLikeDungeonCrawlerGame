import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from './grid';


import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';

import {showModal} from '../actions/index';


class Map extends React.Component {

    constructor(props) {
        super(props);

    }

    close() {
        this.props.showModal("showMap", false);
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
                <Modal  show={this.props.showMap}
                        onHide={() => this.close()}
                        dialogClassName="modal-map">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2>Map</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid   className="grid"
                                rows = {33}
                                columns = {45}
                                newXBegin = {0}
                                newYBegin = {0}
                                windowOrigin = {[0,0]}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick = {() => this.close()}>Close</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.game,
        gameArray: state.gameArray,
        showMap: state.showMap
    };
}
function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        showModal: showModal
    }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Map);