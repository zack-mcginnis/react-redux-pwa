import {GET_ADDRESS_HISTORY} from './constants';
const blockchain_api_url = `https://blockchain.info/q`

export const getAddressReceiveHistory = (address) => dispatch => {
  const get_received = 'getreceivedbyaddress'
  return fetch(`${blockchain_api_url}/${get_received}/${address}`)
    .then(res => res.json())
    .then(amount_received => dispatch({type: GET_ADDRESS_HISTORY, payload: amount_received}))
}
