import React, { Component } from 'react';
import Calculator from './Components/Calculator';

import './App.css';
// bootstrap used only to reboot browser css
import './bootstrap-reboot.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Calculator />
      </div>
    );
  }
}

export default App;
