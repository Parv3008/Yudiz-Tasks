import React, { Component } from 'react'
import Class from './Components/Class.jsx'
import Lifecycle from './Components/Lifecycle.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Class />
        <Lifecycle />
      </div>
    )
  }
}