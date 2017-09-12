import React, { PropTypes } from 'react';


export default class DataViewer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };
  getPrettifiedJson = () => (
    JSON.stringify(this.props.data, null, 2)
  )
  render() {
    return (
      <pre className="data-viewer">{this.getPrettifiedJson()}</pre>
    )
  }
}
