import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import * as User from '../actions/user'

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched
  }
})
export default class Nav extends Component {

  getUser() {
    return this.props.dispatch(User.fetch())
  }

  render() {
    return (
      <nav className="navbar" >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Florin_on_red_square.svg/120px-Florin_on_red_square.svg.png" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item button" onClick={this.getUser.bind(this)}>
              A link
            </a>
            <div>{this.props.user.username}</div>
          </div>
          <div className="navbar-end">
             <a className="navbar-item field">
              <div className="control">
                <input className="input" type="text" placeholder="Search" />
              </div>
             </a>
          </div>
        </div>
      </nav>
    )
  }
}
