import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import './App.css'

class BooksApp extends React.Component {
  state = {
    //showSearchPage: false,
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
        console.log(book);
      }
      this.setState({ books: books });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <CurrentReading currentBooks={this.state.books.filter((book) => book.shelf === 'currentlyReading')} changeShelf={this.changeShelf} />
              <WantToRead wantBooks={this.state.books.filter((book) => book.shelf === 'wantToRead')} changeShelf={this.changeShelf} />
              <Read readBooks={this.state.books.filter((book) => book.shelf === 'read')} changeShelf={this.changeShelf} />
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <div className="list-books-content">
            <SearchBooks books={this.state.books} changeShelf={this.changeShelf} />
          </div>
        )}/> 
        <Link 
            to="/search"
            className="open-search"
            >Add a book
        </Link>
      </div>
    )//return
  }//render
}//BooksApp

export default BooksApp
