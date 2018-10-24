import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm'
import SyncValidationForm from './SyincValidationForm'
import showResults from './showResults'

class App extends Component {
  render() {
    return (
        //<SimpleForm onSubmit={showResults} />
        <SyncValidationForm onSubmit={showResults} />
    );
  }
}

export default App;
