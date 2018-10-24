import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm'
import showResults from './showResults'

class App extends Component {
  render() {
    return (
        <SimpleForm onSubmit={showResults} />
    );
  }
}

export default App;
