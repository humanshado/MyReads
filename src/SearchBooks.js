import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import Book from './Book';

class SearchBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        newBooks: PropTypes.array.isRequired,
        searchBooks: PropTypes.func.isRequired,
        changeShelf: PropTypes.func.isRequired,
        handleChangeShelf: PropTypes.func.isRequired,
        handleSearch: PropTypes.func.isRequired
    }

    state = {
        searchTerm: ''
    }

    handleChangeShelf = (id, shelf) => { 
        this.props.changeShelf(id, shelf);
    }

    handleSearch = (searchTerm) => {
        this.setState({ searchTerm: searchTerm.trim() })
        this.props.searchBooks(searchTerm);
    }

    render() {
        let searchedBooks = this.props.newBooks;

        if (searchedBooks) {
            console.log('Props in SearchBooks', searchedBooks);
            searchedBooks.sort(sortBy('title'));
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                        >Close
                      </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={ this.state.searchTerm || ''}
                        onChange={(e) => this.handleSearch(e.target.value)}/>
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