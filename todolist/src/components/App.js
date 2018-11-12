import React, { Component } from 'react';
import '../style.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className={this.state.show ? 'xianshi' : 'yincang'}>Hello</div>
        <button onClick={this.handleClick}>Toggle</button>
      </React.Fragment>
    );
  }
  handleClick = () => {
    this.setState(() => ({
      show: this.state.show ? false : true
    }));
  };
}

export default App;
