import React from 'react';

export default class Hello extends React.Component {
  state = {
    greeting: 'World',
  }
  onInputChange = (e) => {
    this.setState({
      greeting: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.greeting} !!</h1>
        <label>
          Greeting:
          <input value={this.state.greeting} onChange={ e => { this.onInputChange(e); }} />
        </label>
        <p>Installed ...</p>
        <ol>
          <li>React</li>
          <li>Webpack</li>
          <li>ESLint <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">(airbnb rules)</a></li>
          <li>Babel - ES6 + Stage-0 support</li>
        </ol>
      </div>
    );
  }
}
