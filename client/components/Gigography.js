import * as React from 'react';
import moment from 'moment';

class Gigography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3000/gigs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          data: data
        })
        console.log(this.state.data)
      })
  }
  render() {
    return (
      <table>
        {this.renderGigTableHeader()}
        {this.renderGigTableRows()}
      </table>
    )
  }
  renderGigTableHeader(){
    return (
      <thead>
        <tr>
          <th>DATE</th>
          <th>CITY</th>
          <th>COUNTRY</th>
          <th>VENUE</th>
          <th>DETAILS</th>
        </tr>
     </thead>
 );
  }
  renderGigTableRows(){
    return this.state.data.map(gig => {
      return (
        <tr>
          <td>{moment(gig.date).format('DD MMM')}</td>
          <td>{gig.city}</td>
          <td>{gig.country}</td>
          <td>{gig.venue}</td>
          <td>{gig.details}</td>
        </tr>
      )
    })
  }
}

export default Gigography;
