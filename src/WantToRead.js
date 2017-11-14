import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class WantToRead extends React.Component {
    static propTypes = {
        wantBooks: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        handleChangeShelf: PropTypes.func.isRequired
    }

    handleChangeShelf = (id, value) => {
        this.props.changeShelf(id, value);
    }

    render() {
        let wantBooks = this.props.wantBooks;
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantBooks && wantBooks.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book
                                        bookId={book.id}
                                        bookShelf={book.shelf}
                                        bookImage={book.imageLinks.thumbnail}
                                        bookTitle={book.title}
                                        bookAuthors={book.authors} 
                                        submitShelf={this.handleChangeShelf}/>
                                </li>
                            )
                        })
                        }
                    </ol>
                </div>
            </div>    
        )
    }
}

export default WantToRead