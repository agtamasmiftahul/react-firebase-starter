import React, { Component } from 'react'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  render() {
    return (
      <div>
        MessageList Component
      </div>
    )
  }
}
