import React, {Component} from 'react';
import {connect} from 'react-redux';
import Row from './row';


class Grid extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        let height = this.props.rows;
        let yOrigin = this.props.windowOrigin[1];
        let rows = [];
        for (let y = yOrigin; y < height + yOrigin; y++) {
            rows.push(
                <Row    rowId = {y}
                        key = {'r'+y}
                        rows = {this.props.rows}
                        columns = {this.props.columns}
                        windowOrigin = {this.props.windowOrigin}
                />
            );
        };
        return (
            <div className = "gridHolder">
                {rows}
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

export default connect(mapStateToProps)(Grid);
//export default connect(mapStateToProps, matchDispatchToProps)(Cell);