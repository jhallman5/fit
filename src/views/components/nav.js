import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    foo: 1
  }
})
export default class Nav extends Component {
  render() {
     console.log("=-=-=-", this.props )
    return (
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Hi
            </a>
          </div>
          <div className="navbar-end">
             <a className="navbar-item">
              bye
             </a>
          </div>
        </div>
      </nav>
    )
  }
}
