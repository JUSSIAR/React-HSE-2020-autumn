import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(currentState => ({
      count: currentState.count + 1
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} className='btn'>
          BUTTON
        </button>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

export default App
