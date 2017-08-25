import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Nav from './nav'
import store from "../store"

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div> 
        <Nav />
        <div style={styles.app}>
          Welcome to React!
        </div>
      </div>
    )
  }
}

const root = document.querySelector('#app')

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, root)
