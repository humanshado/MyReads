import React from 'react';
//import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {

    moveToShelf = (e) => {
        console.log(e.target);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 100 + '%', height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option onClick={(e) => this.moveToShelf(e)} value="currentlyReading">Currently Reading</option>
                            <option onClick={(e) => this.moveToShelf(e)} value="wantToRead">Want to Read</option>
                            <option onClick={(e) => this.moveToShelf(e)} value="read">Read</option>
                            <option onClick={(e) => this.moveToShelf(e)} value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-bottom">
                    <p className="book-title">{this.props.bookTitle}</p>
                    <p className="book-authors">{this.props.bookAuthors}</p>
                </div>
            </div>  
        )
    }
}

export default Book