import React from 'react'
import './HomePage.css';

import BookCard from '../BookCard/BookCard';

function HomePage({setDetails,allBooks,searchItem}) {
    function showDetails(id) {
        const detailedBook = allBooks.find((book) =>{
          return book._id === id 
        })
    
        setDetails(detailedBook)
      }
  return (
    <div className='homePage__container'>
        {allBooks.map((book)=>{
            return( <BookCard book={book} key={book._id} showDetails={showDetails}/>)
        })}

        {allBooks.length === 0 && !searchItem  && <h1>There are no books in the library </h1>}
        {allBooks.length === 0 && searchItem  && <h1>We could not the find the searched book </h1>}
    </div>
  )
}

export default HomePage