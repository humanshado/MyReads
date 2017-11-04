import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Read extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <div className="book">
                                <BookTop />
                                <div className="book-title">The Hobbit</div>
                                <div className="book-authors">J.R.R. Tolkien</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Read