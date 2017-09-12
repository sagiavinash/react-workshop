import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <a className="header__logo" href="#">
            <img
              className="header__logo-img"
              src="https://facebook.github.io/react/img/logo.svg"
              alt=""
            />
            <p className="header__logo-label">React Workshop</p>
          </a>
        </div>
      </div>
    );
  }
}
