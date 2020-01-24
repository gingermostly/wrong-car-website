import * as React from 'react';

// could be a function component since it has no state
class GigTableHeader extends React.Component {
  // unnecessary constructor
  constructor(props) {
    super(props);
  }
  render() {
    // if you put parentheses around the return stuff
    // you can put it on new lines and nest it better
    // e.g.
    // return (
    //    <thead>
    //      <tr>
    //        <th>DATE</th>
    //        <th>CITY</th>
    //        <th>COUNTRY</th>
    //        <th>VENUE</th>
    //        <th>DETAILS</th>
    //      </tr>
    //    </thead>
    // );
    // I'd do this on all of them
    return <thead><tr>
        <th>DATE</th>
        <th>CITY</th>
        <th>COUNTRY</th>
        <th>VENUE</th>
        <th>DETAILS</th>
        </tr></thead>;
  }
}

// could be function component
class GigTableRow extends React.Component {
  // unnecessary
  constructor(props) {
    super(props);
  }
  render() {
    return <tr>
        <td>June 16th</td>
        <td>Toronto, ON</td>
        <td>Canada</td>
        <td>Woodbine Park</td>
        <td>Bestival Music Festival - with the Cure</td>
    </tr>
  }
}

// could be function component
// you could just make this the `Gigography` component
class GigTable extends React.Component {
  // unnecessary
  constructor(props) {
    super(props);
  }
  render() {
    return <table>
        <GigTableHeader />
        <GigTableRow />
    </table>;
  }
}

export default GigTable;