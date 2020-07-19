import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = { advice: '' }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const numID = Math.floor(Math.random() * 201);

    axios.get(`https://api.adviceslip.com/advice/${numID}`)
    .then(resp => {
      let data = JSON.parse(resp.data + "}")
      let advice = data.slip.advice
      this.setState({ advice })
    })
    .catch(error => console.log(error))
  }

  render() {
    const { advice } = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">"{ advice }"</h1>
          <button onClick={this.fetchAdvice} className="button">
            <span>Give Me A Quote</span>
          </button>
        </div>
      </div>
    )
  }
}


export default App;