import React from 'react';
import Book from './Book';
//import BookShelfChanger from './BookShelfChanger';

class Read extends React.Component {
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
                                         />
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