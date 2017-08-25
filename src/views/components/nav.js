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
      <div> nav </div>
    )
  }
}
