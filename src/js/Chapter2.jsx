import React, { PropTypes } from 'react';
import getClassNames from 'classnames';
import Button from './Button';
import DataViewer from './DataViewer';


export default class chapter2 extends React.Component {
  state = {
    buttonClickCount: 0,
  };
  handleButtonClick = (message) => {
    window.alert(message);
  };
  render() {
    return (
      <div className="chapter chapter-2">
        <p className="chapter__title">2. Stateful Components</p>
        <div className="chapter__content">
          <div className="chapter__section">
            <p className="chapter__section-title">2.1 Forms</p>
            <div className="chapter__section-content">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProfileForm extends React.Component {
  state = {
    profile: {
      first_name: '',
      last_name: '',
    },
    isBeingSubmitted: false,
  };
  saveProfileUpdates = (changes) => {
    this.setState({
      profile: {
        ...this.state.profile,
        ...changes,
      },
    });
  };
  submitProfileUpdates = () => {
    this.setState({
      isBeingSubmitted: true,
    });

    //apis.profile.updateProfile().then((response) => {})
    setTimeout(() => {
      this.setState({
        isBeingSubmitted: false,
      });
    }, 500);
  };
  render() {
    return (
      <div className="profile-form clearfix">
        <div className="profile-form__main">
          <label className="profile-form__field">
            <p className="profile-form__field-label">First Name</p>
            <input
              className="profile-form__field-input"
              type="text"
              value={this.state.profile.first_name}
              onChange={(e) => this.saveProfileUpdates({ first_name: e.target.value })}
            />
          </label>
          <label className="profile-form__field">
            <p className="profile-form__field-label">Last Name</p>
            <input
              className="profile-form__field-input"
              type="text"
              value={this.state.profile.last_name}
              onChange={(e) => this.saveProfileUpdates({ last_name: e.target.value })}
            />
          </label>
          <div className="profile-form__actions">
            <Button
              type="primary"
              disabled={this.state.isBeingSubmitted}
              onClick={() => this.submitProfileUpdates()}
            >Submit</Button>
          </div>
        </div>
        <div className="profile-form__status">
          <DataViewer data={this.state} />
        </div>
      </div>
    );
  }
}
