import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};
class App extends Component {
  constructor(props) {
    super(props);
  
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  
    this.state = {
      class: STATUS.NORMAL,
    };
  }
  
    _onMouseEnter() {
      this.setState({class: STATUS.HOVERED});
    }
  
    _onMouseLeave() {
      this.setState({class: STATUS.NORMAL});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={this.state.class}
            href={this.props.page || '#'}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
            // className="App-link"
            // href="https://reactjs.org"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {this.props.children}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
