import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getAddressReceiveHistory} from '../../store/actions/address'
import './address.css';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }

  static propTypes = {
    getAddressReceiveHistory: PropTypes.func.isRequired
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({ address: e.target.value });
  }

  handleClick(){
    console.log(this.state.address)
    this.props.getAddressReceiveHistory(this.state.address)
  }

  render() {

    return (
      <div>
        <input type="text" onChange={ (e) => this.handleChange(e) } />
        <input
          type="button"
          value="Alert the text input"
          onClick={ (e) => this.handleClick(e)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const dispatchToProps = (dispatch) => ({
  getAddressReceiveHistory: (address) => dispatch(getAddressReceiveHistory(address))
})

export default connect(mapStateToProps, dispatchToProps)(Address);
