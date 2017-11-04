import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books})
      })
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            <div className="list-books-content">
                <SearchBooks books={this.state.books}/>
                <CurrentReading currentBooks={this.state.books.filter((book) => book.shelf === 'currentlyReading')} />
                <WantToRead wantBooks={this.state.books.filter((book) => book.shelf === 'wantToRead')} />
                <Read readBooks={this.state.books.filter((book) => book.shelf === 'read')} />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>    
      </div>
    )//return
  }//render
}//BooksApp

export default BooksApp
