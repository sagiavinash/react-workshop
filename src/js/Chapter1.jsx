import React from 'react';
import getClassNames from 'classnames';
import Button from './Button';


export default class chapter1 extends React.Component {
  state = {
    buttonClickCount: 0,
  };
  handleButtonClick = (message) => {
    window.alert(message);
  };
  render() {
    return (
      <div className="chapter chapter-1">
        <p className="chapter__title">1. Building Blocks</p>
        <div className="chapter__content">
          <div className="chapter__section">
            <p className="chapter__section-title">1.1 Variations in style</p>
            <div className="chapter__section-content">
              <div className="button-group">
                <Button
                  type="primary"
                  onClick={() => this.handleButtonClick('I am a primary button')}
                >Primary</Button>
                <Button
                  type="secondary"
                  onClick={() => this.handleButtonClick('I am a secondary button')}
                >Secondary</Button>
              </div>
              <div className="button-group">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => this.handleButtonClick('I am a large primary button')}
                >Primary</Button>
                <Button
                  type="secondary"
                  size="large"
                  onClick={() => this.handleButtonClick('I am a large secondary button')}
                >Secondary</Button>
              </div>
            </div>
            <div className="chapter__section">
              <p className="chapter__section-title">1.2 Variations in behaviour</p>
              <div className="chapter__section-content">
                <div className="button-group">
                  <Button
                    type="primary"
                    onClick={() => this.handleButtonClick('I am a primary button')}
                  >Primary</Button>
                  <Button
                    type="primary"
                    disabled
                    onClick={() => this.handleButtonClick('I am a disabled primary button')}
                  >Primary</Button>
                </div>
                <div className="button-group">
                  <Button
                    type="secondary"
                    onClick={() => this.handleButtonClick('I am a secondary button')}
                  >Secondary</Button>
                  <Button
                    type="secondary"
                    disabled
                    onClick={() => this.handleButtonClick('I am a diabled secondary button')}
                  >Secondary</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
