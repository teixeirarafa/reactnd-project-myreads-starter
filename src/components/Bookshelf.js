import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList';

const Bookshelf = (props) => {   
  const {books, bookshelf, bookshelfTitle, shelfChange} = props
  const showingBooks = books.filter(book => book.shelf === bookshelf);

  return(
    <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">                
          <ol className="books-grid">
            {showingBooks.map(book => (
              <BookList 
                key={book.id} 
                book={book}
                shelfChange={shelfChange}
              />
            ))}
          </ol>
        </div>
    </div>    
  )
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookshelf: PropTypes.string.isRequired,
  bookshelfTitle: PropTypes.string.isRequired,      
  shelfChange : PropTypes.func.isRequired,
}

export default Bookshelf