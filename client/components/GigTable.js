import * as React from 'react';
import GigTableHeader from './GigTableHeader.js';

class GigTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <table>
        <GigTableHeader />
    </table>;
  }
}

export default GigTable;