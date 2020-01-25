import * as React from 'react';
import { render } from 'react-dom';

class DataForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            city: '',
            state: '',
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
        console.log(this.state)
    } 
    render(){
        return (
        <form>
            <label>Date:</label>
           <input type="date" name="date" onChange={this.handleChange.bind(this)}></input> 
           <label>City:</label>
           <input type="text" name="city" onChange={this.handleChange.bind(this)}></input>
           <label>State:</label>
           <input type="text" name="state" onChange={this.handleChange.bind(this)}></input>
           <label>Country:</label>
           <input type="text" name="country" onChange={this.handleChange.bind(this)}></input> 
           <label>Details:</label>
           <input type="text" name="details" onChange={this.handleChange.bind(this)}></input>
           <input type="submit" value="Submit" />        
        </form>
        )
    }
}

export default DataForm;