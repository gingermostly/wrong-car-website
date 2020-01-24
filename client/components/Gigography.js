import * as React from 'react';
import GigTable from './GigTable.js';

// this component just returns another component, is it necessary?
// if you do need this for some reason, a comment would be good as to why
class Gigography extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <GigTable />
  }
}

export default Gigography;
