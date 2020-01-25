import {GET_ADDRESS_HISTORY} from '../actions/constants'

const addressReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_ADDRESS_HISTORY:
        return payload
      default:
        return state
    }
}

export default addressReducer;
