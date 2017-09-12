import React, { PropTypes } from 'react';
import getClassNames from 'classnames';


const propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['large']),
};

export default function Button(props) {
  return (
    <button
      className={getClassNames('button', {
        [`button--${props.type}`]: props.type,
        [`button--${props.size}`]: props.size,
        'button--disabled': props.disabled,
      })}
      onClick={(e) => {
        if (!props.disabled) {
          props.onClick(e);
        }
      }}
    >
      <div className="button__content">{props.children}</div>
    </button>
  );
}
