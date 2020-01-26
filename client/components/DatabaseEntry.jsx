import * as React from 'react';
import { render } from 'react-dom';

class DataForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            city: '',
            country: '',
            venue: '',
            details: ''
        }
    }
    handleChange(e){
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    } 
    handleSubmit(e){
        e.preventDefault();
        fetch('http://127.0.0.1:3000/gigs', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            res.json()
        })
    }
    render(){
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Date:</label>
           <input type="date" name="date" onChange={this.handleChange.bind(this)}></input> 
           <label>City:</label>
           <input type="text" name="city" onChange={this.handleChange.bind(this)}></input>
           <label>Country:</label>
           <input type="text" name="country" onChange={this.handleChange.bind(this)}></input> 
           <label>Venue:</label>
           <input type="text" name="venue" onChange={this.handleChange.bind(this)}></input> 
           <label>Details:</label>
           <input type="text" name="details" onChange={this.handleChange.bind(this)}></input>
           <input type="submit" value="Submit" />        
        </form>
        )
    }
}

export default DataForm;