import React, { Component } from 'react'
import MessageList from './components/MessageList'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Message List App"/>
        <MessageList />
      </div>
    )
  }
}
