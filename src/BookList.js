import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class BookList extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfChange : PropTypes.func.isRequired,
    }

    render(){
        const {book, shelfChange} = this.props

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>

                    <BookshelfChanger
                        book={book}
                        shelfChange={shelfChange}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map(author => (
                    <div key={author} className="book-authors">{author}</div>
                ))}                        
                </div>
            </li>
        )
    }
}

export default BookList