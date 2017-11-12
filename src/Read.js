import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class Read extends React.Component {
    static propTypes = {
        readBooks: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        handleChangeShelf: PropTypes.func.isRequired
    }

    handleChangeShelf = (id, value) => {
        this.props.changeShelf(id, value);
    }

    render() {
        let readBooks = this.props.readBooks;
        if (readBooks) {
            console.log('Props in Read', readBooks);
        }
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {readBooks && readBooks.map((book) => {
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

export default Read