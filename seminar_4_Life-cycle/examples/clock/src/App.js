import React from 'react'
import './App.css'

const Clock = ({ date }) => <div>{date.toLocaleTimeString()}</div>

class App extends React.Component {
  state = {
    time: new Date()
  }
  interval = null

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        <div>Current time is</div>
        <Clock date={this.state.time} />
      </div>
    )
  }
}

export default App
