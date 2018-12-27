import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class BookList extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,       
    }

    render(){
        const {book} = this.props

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>

                    <BookshelfChanger shelfBook={book.shelf} />
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