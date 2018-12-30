import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList';

class Bookshelf extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelf: PropTypes.string.isRequired,
        bookshelfTitle: PropTypes.string.isRequired,      
        shelfChange : PropTypes.func.isRequired,
    }

    render(){
      const {books, bookshelf, bookshelfTitle, shelfChange} = this.props
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
}

export default Bookshelf