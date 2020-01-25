import * as React from 'react';
let testGig = {
      date: 'June 12th',
      city: 'Toronto',
      state: 'ON',
      country: 'Canada',
      venue: 'Woodbine Park',
      details: 'Bestival Music Festival - with the Cure'
  }
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
      console.log(gig.date)
      return (
        <tr>
          <td>{gig.date}</td>
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
