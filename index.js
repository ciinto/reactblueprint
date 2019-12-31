import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Button } from "@blueprintjs/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

    setTimeout(()=>{ this.setState({name: 'chung'})}, 3000)
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Button intent="success" text="button content" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
