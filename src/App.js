import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            <div className="list-books-content">
                <SearchBooks />
                <CurrentReading />
                <WantToRead />
                <Read />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>    
      </div>
    )
  }
}

export default BooksApp
