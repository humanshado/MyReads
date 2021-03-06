import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class CurrentReading extends React.Component{ 
    static propTypes = {
        currentBooks: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        handleChangeShelf: PropTypes.func.isRequired
    }

    handleChangeShelf = (id, value) => {
        this.props.changeShelf(id, value);
    }
    
    render(){
        let currentBooks = this.props.currentBooks;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentBooks && currentBooks.map((book) => {
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

export default CurrentReading