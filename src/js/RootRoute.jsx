import React from 'react';
import { Link } from 'react-router';
import Header from './Header';


export default class RootRoute extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="root__content clearfix">
          <div className="root__route-menu">
            <ChaptersMenu />
          </div>
          <div className="root__route-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

class ChaptersMenu extends React.Component {
  render() {
    return (
      <div className="chapters-menu">
        <Link to="/chapter1" className="chapters-item" activeClassName="chapters-item--active">
          <p className="chapters-item__title">1. Building Blocks</p>
          <p className="chapters-item__subtitle">1.1 Variations in style</p>
          <p className="chapters-item__subtitle">1.2 Variations in behaviour</p>
        </Link>
        <Link to="/chapter2" className="chapters-item" activeClassName="chapters-item--active">
          <p className="chapters-item__title">2. Stateful Components</p>
          <p className="chapters-item__subtitle">2.1 Forms</p>
        </Link>
        <Link to="/chapter3" className="chapters-item" activeClassName="chapters-item--active">
          <p className="chapters-item__title">3. Lifecycle methods</p>
          <p className="chapters-item__subtitle">3.1 Controlled Inputs</p>
          <p className="chapters-item__subtitle">3.2 Controlled Updates</p>
        </Link>
        <Link to="/chapter4" className="chapters-item" activeClassName="chapters-item--active">
          <p className="chapters-item__title">4. Redux</p>
          <p className="chapters-item__subtitle">4.1 Single Data Store</p>
          <p className="chapters-item__subtitle">4.2 Unidirectional Updates</p>
        </Link>
      </div>
    );
  }
}
