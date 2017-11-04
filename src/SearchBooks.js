import React from 'react';
//import * as BooksAPI from './BooksAPI'
import Book from './Book';
//import BookShelfChanger from './BookShelfChanger';

class SearchBooks extends React.Component {
    render() {
        let searchedBooks = this.props.books;
        if (this.props.books) {
            console.log('Props in searchbooks', searchedBooks);
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                                        bookAuthors={book.authors}/>
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