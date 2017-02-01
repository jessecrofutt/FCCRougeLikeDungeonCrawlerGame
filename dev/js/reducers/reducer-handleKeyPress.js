//state must be set to null or empty object returned
//or something to prevent many errors from being thrown

import * as types from '../actions/index';

e.preventDefault()
console.log('handleKeyPress: ' + e);

const handleKeyPressReducer = (state = {}, action) => {

    return {
        type: action,
        payload: payload
    }
}
//Write Different reducers for each slice of state


export default handleKeyPressReducer;