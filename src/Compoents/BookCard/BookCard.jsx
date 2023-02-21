import React from 'react'
import './BookCard.css'
import { Link } from 'react-router-dom'
function BookCard({book,showDetails}) {
    const {_id,title, author, description} = book;
    const detailsHandler = () =>{

        showDetails(_id);
    }
  return (
    <div className='bookCard_container'>
        <h1>Name:{title}</h1>
        <h2>Author:{author}</h2>
        <p>Desc: {description}</p>
        <Link to={`/Details/${_id}`}><button onClick={detailsHandler} className="button">Details</button></Link>

    </div>
  )
}

export default BookCard