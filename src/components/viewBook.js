import React, { Component } from 'react';

import UpdateBook from "./updateBook";
import DeleteAction from './deleteAction';
 
export default class ViewBook extends Component {
    constructor(props) {
    super(props)

    this.state = {
        singleBook:[]
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
       

        fetch(`https://book-index-api-cb.herokuapp.com/book/${id}`, {
        method: 'GET',
        headers:{
            'accepts': "application/json",
            "Content-Type" : "application/json"
        }
        }).then(response => {
            return response.json()})
        .then(data => {this.setState(
            {singleBook: data})
            console.log(data)
        }).catch(err => {
            console.log('Fetch error', err)
        })
    }
    render() {
        return (
            <div className='info-wrapper'>
                <h1>Book Information</h1>
                <hr/>
                <div className='book-title'>
                    {this.state.singleBook[1]}
                </div>

                <div className='book-author'>
                    {this.state.singleBook[2]}
                </div>
                <UpdateBook ourProp = {this.state.singleBook}/>
                <DeleteAction id={this.state.singleBook[0]}/>
                
            </div>
        );
    }
}