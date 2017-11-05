import React from 'react';

class Book extends React.Component {

    handleSubmitShelf = (e) => {
        let value = e.target.value;
        let id  = this.props.bookId;

        this.props.submitShelf(id, value);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 100 + '%', height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.bookShelf} onChange={(e) => this.handleSubmitShelf(e)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
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