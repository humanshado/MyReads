import React from 'react';
import Book from './Book';

class CurrentReading extends React.Component{ 

    handleChangeShelf = (id, value) => {
        this.props.changeShelf(id, value);
    }
    
    render(){
        let currentBooks = this.props.currentBooks;
        if(currentBooks){
            console.log('Props in CurrentReading ', currentBooks);
        }
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