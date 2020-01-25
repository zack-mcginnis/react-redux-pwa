import {GET_CUSTOMERS} from './constants';


export const getCustomers = () => dispatch => {
  return fetch(`http://localhost:5000/api/customers`)
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}
