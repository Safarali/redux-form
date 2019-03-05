import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

class App extends Component {

  initialValues = {
    remember: true
  }

  handleSimpleFormSubmit = (values) => {
    console.log(values);
    
  }

  render() {
    return (
      <div className="app">
        <SimpleForm 
          onSubmit={this.handleSimpleFormSubmit}
          initialValues={this.initialValues}
        />
      </div>
    );
  }
}

export default App;
