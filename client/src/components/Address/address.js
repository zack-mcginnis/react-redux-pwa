import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getAddressReceiveHistory} from '../../store/actions/address'
import './address.css';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      header: 'Enter a BTC address to verify it has not been used',
      result: '',
      error: false
    };

    this.displayResult = this.displayResult.bind(this);
  }

  static propTypes = {
    getAddressReceiveHistory: PropTypes.func.isRequired
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({ address: e.target.value });
  }

  async handleClick(){
    console.log(this.state.address)
    try {
      const result = await this.props.getAddressReceiveHistory(this.state.address)

      if(result.payload.reason) {
        this.setState({error: true})
      } else {
        this.setState({result: result.payload})
      }

      console.log(result)
    } catch (err) {
      console.log(err)
      this.setState({error: true})
    }

    this.displayResult()
  }

  displayResult() {
    if(this.state.error) {
      return `Invalid address`
    }

    // if we don't have a result yet
    if(this.state.result === '') {
      return `Enter a valid BTC address`
    }

    // if the address has received btc in the past
    // test: 1EnJHhq8Jq8vDuZA5ahVh6H4t6jh1mB4rq
    if(this.state.result > 0) {
      return `This address has received ${this.state.result} satoshis`
    } else {
      // if the address has not received btc yet
      // test: 3MsUbTHEAgvgVgRgpR8fCbS27wjZyHJPwr
      return `This address has not received BTC yet`
    }
  }

  render() {

    return (
      <div>
        <h3>{this.state.header}</h3>
        <input type="text" onChange={ (e) => this.handleChange(e) } />
        <input
          type="button"
          value="Submit"
          onClick={ (e) => this.handleClick(e)}
        />
        <div>
          {this.displayResult()}
        </div>
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
