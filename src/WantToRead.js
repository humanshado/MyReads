import React from 'react';
import Book from './Book';
//import BookShelfChanger from './BookShelfChanger';

class WantToRead extends React.Component {

    handleChangeShelf = (id, value) => {
        this.props.changeShelf(id, value);
    }

    render() {
        let wantBooks = this.props.wantBooks;
        if (wantBooks) {
            console.log('Props in WantToRead', wantBooks);
        }
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