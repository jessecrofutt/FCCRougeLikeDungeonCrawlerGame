import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cell from './cell';

class Row extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        let width = this.props.columns;
        let xOrigin = this.props.windowOrigin[0];

        let columns = [];

        for (let x = xOrigin; x < width + xOrigin; x++) {
            columns.push(

                <Cell   cellIdy = {this.props.rowId}
                        cellIdx = {x}
                        key = {'x'+x+'y'+this.props.rowId}
                        className = "cell"
                        rows = {this.props.rows}
                        columns = {this.props.columns}
                />
            );
        };
        return (
            <div className = "rowHolder">
                {columns}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.game
    };
}
//function matchDispatchToProps(dispatch) {
//    return bindActionCreators({selectUser: selectUser}, dispatch)
//}

export default connect(mapStateToProps)(Row);
//export default connect(mapStateToProps, matchDispatchToProps)(Cell);