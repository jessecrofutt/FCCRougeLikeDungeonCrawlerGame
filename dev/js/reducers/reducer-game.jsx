import * as types from '../actions/index';

const updateGameDataReducer = (state = {}, action) => {
        //console.log('updateGameDataReducer triggered ');


    return Object.assign({},{

        id: 0,
        category: 'initialize',
        levelArray: [],
        columns: 45,
        rows: 33,
        windowRows: 15,
        windowColumns: 20,
        weapon: 'hands',
        showModal: false,
        status: 'searching'
    })

}

export default updateGameDataReducer;

