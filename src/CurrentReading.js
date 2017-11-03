import React from 'react';
import BookTop from './BookTop';

class CurrentReading extends React.Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <div className="book">
                                <BookTop />
                                <div className="book-title">To Kill a Mockingbird</div>
                                <div className="book-authors">Harper Lee</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentReading