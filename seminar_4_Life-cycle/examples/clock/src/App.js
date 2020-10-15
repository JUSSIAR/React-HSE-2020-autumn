import React from 'react'
import logo from './logo.svg'
import './App.css'

const Clock = ({ date }) => <div>{date.toLocaleTimeString()}</div>

class App extends React.Component {
  render () {
    return (
      <div>
        <div>Current time is</div>
        <Clock date={new Date()} />
      </div>
    )
  }
}

export default App
