import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
import WantToRead from './WantToRead';
import Read from './Read';
import './App.css';

class BooksApp extends React.Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      newBooks: PropTypes.array.isRequired,
      makeUnique: PropTypes.func.isRequired,
      searchBooks: PropTypes.func.isRequired,
      handleUpdate: PropTypes.func.isRequired,
      changeShelf: PropTypes.func.isRequired
    }

    state = {
      books: [],
      newBooks: []
    }

    componentDidMount = () => {
        BooksAPI.getAll().then((books) => {
          this.setState({ books: books})
        })
    }

    // Used some code from this stackoverflow page: https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    makeUnique = (books) => {
      let seen = new Set();
      return books.filter(book => {
        return seen.has(book.id) ? false : seen.add(book.id);
      });
  }

    searchBooks = (searchTerm, maxResults = 20) => {
      let newBooks = [];
      BooksAPI.search(searchTerm, maxResults).then((books) => {
        newBooks = this.makeUnique(books);
        this.setState({ newBooks: newBooks });
      })
    }

    handleUpdate = (book, shelf) => {
      BooksAPI.update(book, shelf).then((book) => {
        this.setState(state => ({
          books: state.books.concat([book])
        }))
      })
    }

    changeShelf = (id, shelf) => {
      let books = this.state.books.concat(this.state.newBooks);
      books = books.map((book) => {
        if (book.id === id) {
          book.shelf = shelf;
          this.handleUpdate(book, book.shelf);
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
                <CurrentReading currentBooks={this.state.books.filter((book) => book.shelf === "currentlyReading")} changeShelf={this.changeShelf} />
                <WantToRead wantBooks={this.state.books.filter((book) => book.shelf === "wantToRead")} changeShelf={this.changeShelf} />
                <Read readBooks={this.state.books.filter((book) => book.shelf === "read")} changeShelf={this.changeShelf} />
              </div>
            </div>
          )} />
          <Route path="/search" render={() => (
            <div className="list-books-content">
              <SearchBooks 
                newBooks={this.state.newBooks} 
                searchBooks={this.searchBooks}
                changeShelf={this.changeShelf}/>
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
