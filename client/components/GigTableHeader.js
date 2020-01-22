import * as React from 'react';

class GigTableHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <thead><tr>
        <th>DATE</th>
        <th>CITY</th>
        <th>COUNTRY</th>
        <th>VENUE</th>
        <th>DETAILS</th>
        </tr></thead>;
  }
}

export default GigTableHeader;