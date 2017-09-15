import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return (
      <h2> Hello React</h2>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
