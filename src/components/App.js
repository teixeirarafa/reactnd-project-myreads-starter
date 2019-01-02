import React from 'react';
import { Route } from 'react-router-dom';
import '../css/App.css'
import * as BooksAPI from '../service/BooksAPI';
import Bookshelf from './Bookshelf';
import OpenSearch from './OpenSearch';
import SearchBook from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [],    
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  shelfChange = (bookChanged, shelf) => {
    BooksAPI.update(bookChanged, shelf)
    bookChanged.shelf = shelf
    this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== bookChanged.id)
          .concat(bookChanged)
      }));
  }

  render() {
    return (
      <div className="app">

        <Route path='/search' render={({ history }) => (
          <SearchBook
            history={ history }
            shelfChange={ this.shelfChange }
            booksOnShelf={this.state.books}
          />
        )} />
          
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf 
                books = {this.state.books} 
                bookshelf = 'currentlyReading' 
                bookshelfTitle = 'Currently Reading'
                shelfChange = {this.shelfChange}
              />
              <Bookshelf 
                books = {this.state.books} 
                bookshelf = 'wantToRead'
                bookshelfTitle = 'Want to Read'
                shelfChange = {this.shelfChange}
              />
              <Bookshelf 
                books = {this.state.books}
                bookshelf = 'read'
                bookshelfTitle = 'Read'
                shelfChange = {this.shelfChange}
              />
            </div>
            <OpenSearch history={ history } />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
