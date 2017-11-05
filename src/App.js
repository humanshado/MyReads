import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books})
      })
  }

  changeShelf = (id, value) => {
    console.log('id in App.js changeShelf', id);
    console.log('value in App.js changeShelf', value);

    let books = this.state.books;
    books = books.map((book) => {
      if(book.id === id){
        book.shelf = value;
        this.setState({ books: books });
        console.log(book);
      }
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
                <SearchBooks books={this.state.books} changeShelf={this.changeShelf}/>
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
