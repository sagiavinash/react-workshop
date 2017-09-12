import React, { PropTypes } from 'react';
import getClassNames from 'classnames';
import Button from './Button';
import DataViewer from './DataViewer';


export default class Chapter3 extends React.Component {
  render() {
    return (
      <div className="chapter chapter-3">
        <p className="chapter__title">3. LifeCycle Methods</p>
        <div className="chapter__content">
          <div className="chapter__section">
            <p className="chapter__section-title">3.1 Controlled Inputs (componentWillReceiveProps)</p>
            <div className="chapter__section-content">
              <UserForm />
            </div>
          </div>
          <div className="chapter__section">
            <p className="chapter__section-title">3.2 Controlled Updates (shouldComponentUpdate)</p>
            <div className="chapter__section-content">
              <UserFormPerformant />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class UserForm extends React.Component {
  state = {
    username: '',
  };
  handleUserNameChange = (newValue) => {
    this.setState({ username: newValue });
  };
  render() {
    return (
      <div className="user-form clearfix">
        <div className="user-form__main">
          <div className="user-form__field">
            <p className="user-form__label">Username</p>
            <ControlledTextInput
              id="1"
              className="user-form__input"
              value={this.state.username}
              onUserInput={this.handleUserNameChange}
            />
          </div>
        </div>
        <div className="user-form__status">
          <DataViewer data={this.state} />
        </div>
      </div>
    );
  }
}

class ControlledTextInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onUserInput: PropTypes.func.isRequired,
    className: PropTypes.string,
  };
  state = {
    value: this.props.value,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value !== this.props.value) {
      this.props.onUserInput(e.target.value);
    }
  }
  handleBlur = (e) => {
    if (e.target.value !== this.props.value) {
      this.props.onUserInput(e.target.value);
    }
  }
  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        value={this.state.value}
        onChange={(e) => this.handleChange(e)}
        onBlur={(e) => this.handleBlur(e)}
        onKeyDown={(e) => this.handleKeyDown(e)}
      />
    );
  }
}


class UserFormPerformant extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  };
  handleChange(changes) {
    this.setState(changes);
  }
  render() {
    return (
      <div className="user-form clearfix">
        <div className="user-form__main">
          <div className="user-form__field">
            <p className="user-form__label">First Name</p>
            <SimpleTextInput
              id="firstName"
              className="user-form__input"
              value={this.state.firstName}
              onChange={(e) => this.handleChange({ firstName: e.target.value })}
            />
          </div>
          <div className="user-form__field">
            <p className="user-form__label">Last Name</p>
            <SimpleTextInput
              id="lastName"
              className="user-form__input"
              value={this.state.lastName}
              onChange={(e) => this.handleChange({ lastName: e.target.value })}
              performant
            />
          </div>
        </div>
        <div className="user-form__status">
          <DataViewer data={this.state} />
        </div>
      </div>
    );
  }
}

class SimpleTextInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    performant: PropTypes.bool,
    className: PropTypes.string,
  };
  shouldComponentUpdate(nextProps) {
    return (
      !this.props.performant ||
      this.props.value !== nextProps.value
    );
  }
  render() {
    console.log('render', this.props.id);
    return (
      <input
        type="text"
        value={this.props.value}
        className={this.props.className}
        onChange={this.props.onChange}
      />
    );
  }
}
