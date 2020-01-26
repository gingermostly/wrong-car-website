import * as React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, min-content 200px);
    grid-gap: 10px;
    margin-bottom: 20px;
    input {
        border-radius: 2px;
        border: 0;
        padding: 2px 4px 3px;
        min-width: 0;
        font: inherit;
        font-size: 14px;
        height: 24px;
    }
    div {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr min-content;
        grid-gap: 5px;
        grid-column: 2 / span 3;
    }
    button {
        background: #c71742;
        border: 0;
        padding: 0 8px;
        border-radius: 2px;
        color: inherit;
        font: inherit;
        font-size: 14px;
    }
`;

class DataForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    handleChange(e){
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    } 
    handleSubmit(){
        fetch('http://127.0.0.1:3000/gigs', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            res.json();
        })
        .catch(err => {
            console.error(err)
        })
    }
    render(){
        return (
        <Form onSubmit={this.handleSubmit.bind(this)}>
            <label>Date:</label>
            <input type="date" name="date" onChange={this.handleChange.bind(this)}></input> 
            <label>City:</label>
            <input type="text" name="city" onChange={this.handleChange.bind(this)}></input>
            <label>Country:</label>
            <input type="text" name="country" onChange={this.handleChange.bind(this)}></input> 
            <label>Venue:</label>
            <input type="text" name="venue" onChange={this.handleChange.bind(this)}></input> 
            <label>Details:</label>
            <div>
                <input type="text" name="details" onChange={this.handleChange.bind(this)}></input>
                <button type="submit">Submit</button>       
            </div>
        </Form>
        )
    }
}
export default DataForm;