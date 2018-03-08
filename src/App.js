import React, { Component } from 'react'
import firebase from 'firebase'

import MessageList from './components/MessageList'
import Header from './components/Header'
import MessageBox from './components/MessageBox'

export default class App extends Component {
  constructor(props) {
    super(props)
    let config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DB_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <div className="container">
        <Header title="Message List App"/>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    )
  }
}
