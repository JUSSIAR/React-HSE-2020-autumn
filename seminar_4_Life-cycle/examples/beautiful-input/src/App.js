import React from 'react'
import './App.css'

const BeautifulInput = ({ value, onChange, placeholder = 'Type in me!' }) => (
  <input
    className='beautiful-input'
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

class App extends React.Component {
  state = {
    inputValue: ''
  }

  handleInputChange = event => {
    const { value } = event.target

    this.setState({ inputValue: value })
  }

  render () {
    return (
      <div className="app">
        <BeautifulInput
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default App
