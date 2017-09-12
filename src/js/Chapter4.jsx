import React, { PropTypes } from 'react';
import getClassNames from 'classnames';
import { connect } from 'react-redux';
import Button from './Button';
import DataViewer from './DataViewer';
import { updateUserDetails } from './store';


class Chapter4 extends React.Component {
  static propTypes = {
    userDetails: PropTypes.object,
    saveUserDetails: PropTypes.func,
  };
  render() {
    return (
      <div className="chapter chapter-3">
        <p className="chapter__title">4. Redux</p>
        <div className="chapter__content">
          <div className="chapter__section">
            <p className="chapter__section-title">4.1 Single Data Store</p>
            <div className="chapter__section-content">
              <p className="user-details__title">User Details: </p>
              <p className="user-details__field">First Name - {this.props.userDetails.first_name || 'not specified'}</p>
              <p className="user-details__field">Last Name - {this.props.userDetails.last_name || 'not specified'}</p>
            </div>
          </div>
          <div className="chapter__section">
            <p className="chapter__section-title">4.2 Unidirectional Updates</p>
            <div className="chapter__section-content">
              <UserForm
                userDetails={this.props.userDetails}
                saveUserDetails={this.props.saveUserDetails}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ userDetails: state.userDetails });
const mapDispatchToProps = { saveUserDetails: updateUserDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chapter4);

class UserForm extends React.Component {
  static propTypes = {
    userDetails: PropTypes.object,
    saveUserDetails: PropTypes.func,
  };
  render() {
    return (
      <div className="user-form clearfix">
        <div className="user-form__main">
          <div className="user-form__field">
            <p className="user-form__label">First Name</p>
            <ControlledTextInput
              className="user-form__input"
              value={this.props.userDetails.first_name}
              onUserInput={(value) => this.props.saveUserDetails({ first_name: value })}
            />
          </div>
          <div className="user-form__field">
            <p className="user-form__label">Last Name</p>
            <ControlledTextInput
              className="user-form__input"
              value={this.props.userDetails.last_name}
              onUserInput={(value) => this.props.saveUserDetails({ last_name: value })}
            />
          </div>
        </div>
        <div className="user-form__status">
          <DataViewer data={this.props.userDetails} />
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
