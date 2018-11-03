import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Students from './components/Students';
import Assignments from './components/Assignments';
import Header from './components/Header';

import 'typeface-roboto';

class App extends React.Component {
  state = {
    currentComponent: 'home',
    assignment: null,
  }

  changeComponent = (component, assignment) => {
    this.setState(() => ({ currentComponent: component, assignment }));
  }

  render () {
    const { assignment } = this.state;

    return (
      <div>
        <Header changeComponent={this.changeComponent} />
        {this.state.currentComponent === 'home'
          ? <Assignments changeComponent={this.changeComponent} />
          : <Students assignment={assignment} changeComponent={this.changeComponent} />
        }
      </div>
    );
  }
}

export default App;
