import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Address from './components/Address/address'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <Address/>
        </div>
      </Provider>
    )
  }
}

export default App
