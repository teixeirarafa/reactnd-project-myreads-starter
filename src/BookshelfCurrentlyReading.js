import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList';

class BookshelfCurrentlyReading extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,        
        //removeContact: PropTypes.func.isRequired,
    }   

    render(){
      const bookshelf = 'currentlyReading'
      const showingBooks = this.props.books.filter(book => book.shelf === bookshelf);

      return(
          <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">                
                <ol className="books-grid">
                  {showingBooks.map(book => (
                    <BookList key={book.id} book={book} />
                  ))}
                </ol>
              </div>
          </div>    
      )
    }
}

export default BookshelfCurrentlyReading