import React from 'react';
import BookTop from './BookTop';

class WantToRead extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <div className="book">
                                <BookTop />
                                <div className="book-title">1776</div>
                                <div className="book-authors">David McCullough</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>    
        )
    }
}

export default WantToRead