import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { PropTypes } from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

class SearchBook extends Component{
  static propTypes = {
    history: PropTypes.object.isRequired,
    shelfChange : PropTypes.func.isRequired,
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
           this.setState(() => ({
            booksFound: books
          }))
        }
        else{
          this.setState({booksFound: []})         
        }
      })
    } else {
      this.setState({booksFound: [], query: ''})      
    }
  }

  render(){
      const {query} = this.state

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
              {this.state.booksFound.map((book) => (
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

export default SearchBook;