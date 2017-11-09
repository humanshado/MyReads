import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends React.Component {

    handleChangeShelf = (id, value) => { 
        this.props.changeShelf(id, value);
    }

    render() {
        let searchedBooks = this.props.books;
        if (this.props.books) {
            console.log('Props in SearchBooks', searchedBooks);
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        exact to="/"
                        className="close-search"
                        >Close
                      </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <h2 className="bookshelf-title">Search Results</h2>
                    <ol className="books-grid">
                        {searchedBooks && searchedBooks.map((book) => {
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

export default SearchBooks