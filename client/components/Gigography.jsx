import * as React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const GigTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
    color: #c71742;
    border-bottom: 1px solid #c71742;
    padding: 4px 6px;
    vertical-align: top;
  }
  td {
    padding: 4px 6px;
    white-space: nowrap;
    vertical-align: top;
  }
  td:last-child {
    white-space: normal;
  }
  tbody tr:first-child td {
    padding-top: 8px;
  }
  tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }
`;

class Gigography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:1337/gigs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          data: data
        })
      })
  }
  render() {
    return (
      <div>
        <GigTable>
          {this.renderGigTableHeader()}
          <tbody>
            {this.renderGigTableRows()} 
          </tbody>
        </GigTable>
      </div>
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
        <tr key={gig._id}>
          <td>{moment.utc(gig.date).format('DD MMM')}</td>
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
