import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { PropTypes } from 'prop-types';
import * as BooksAPI from '../service/BooksAPI';
import BookList from './BookList';

class SearchBooks extends Component{
  static propTypes = {
    history: PropTypes.object.isRequired,
    shelfChange: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    booksFound: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    
    this.searchBooks(query)
  }
  
  searchBooks = (val) => {
    if (val.length !== 0) {
      BooksAPI.search(val).then((books) => {
        if (books !== undefined && books.error !== 'empty query') {
           this.updateBooks(books)
        }
        else{
          this.setState({booksFound: []})         
        }
      })
    } else {
      this.setState({booksFound: []})      
    }
  }

  updateBooks(books) {
    const verifiedBooks = books.map(book => {
      book.shelf = "none";
      this.props.booksOnShelf.forEach(bookOnShelf => {
        if (book.id === bookOnShelf.id) {
          book.shelf = bookOnShelf.shelf;
        }
      });
      return book;
    });
    this.setState({
      booksFound: verifiedBooks
    });
  }

  render(){
    const {query, booksFound} = this.state

    return(
        <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.props.history.push('/')} >Close</button>
          <div className="search-books-input-wrapper"> 
            <DebounceInput
              debounceTimeout={500}
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksFound.map((book) => (
              <BookList 
                key={book.id} 
                book={book}
                shelfChange={this.props.shelfChange}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;