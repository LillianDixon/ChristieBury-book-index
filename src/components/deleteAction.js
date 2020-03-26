import React from 'react';
import { Link } from 'react-router-dom';

export default function DeleteAction(props) {
    function handleClick(){
        fetch(`https://book-index-api-cb.herokuapp.com/delete/${props.id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log("deleted error", err)
        })
    }
    return (
        <div>
            <Link onClick={handleClick}to={'/deleted_book'}>Delete action</Link>
        </div>
    )
}

   
