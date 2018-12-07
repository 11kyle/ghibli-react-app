import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.png';
import Card from './Card';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        movies: []
      }
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films')
      .then(response => this.setState({movies: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Card cardData={this.state.movies}/>
      </div>
    );
  }
}

export default App;
