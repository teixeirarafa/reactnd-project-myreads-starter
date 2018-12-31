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
        const backgroundImage = book.hasOwnProperty('imageLinks') ? book.imageLinks.smallThumbnail : ''

        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url(${backgroundImage})` }}></div>

                    <BookshelfChanger
                        book={book}
                        shelfChange={shelfChange}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                    { book.hasOwnProperty('authors') ?
                        book.authors.map(author => (
                            <div key={author} className="book-authors">{author}</div>
                        )) : <div className="book-authors">author unavailable</div>
                    }       
                </div>
            </li>
        )
    }
}

export default BookList