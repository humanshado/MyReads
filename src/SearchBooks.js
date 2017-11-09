import React from 'react';
import { Link } from 'react-router-dom';
//import escapeRegExp from 'escape-string-regexp';
//import sortBy from 'sort-by';
import Book from './Book';

class SearchBooks extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChangeShelf = (id, value) => { 
        this.props.changeShelf(id, value);
    }

    handleSearch = (searchTerm) => {
        //const match = new RegExp(escapeRegExp(this.state.searchTerm), 'i');
        this.setState({ searchTerm: searchTerm })
        this.props.searchBooks(searchTerm);
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
                        to="/"
                        className="close-search"
                        >Close
                      </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={this.state.searchTerm}
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