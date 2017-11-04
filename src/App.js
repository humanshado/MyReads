import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import CurrentReading from './CurrentReading';
//import WantToRead from './WantToRead';
//import Read from './Read';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    noneBooks: [],
    currentBooks: [],
    wantBooks: [],
    readBooks: []
  }

  classifyBooks = (state) => {
    console.log('state in classifyBooks ',state)
    state.books.map((book) => {
        if (book.shelf === 'currentlyReading'){
          state.currentBooks.push(book)
        }else if(book.shelf === 'wantToRead'){
          state.wantBooks.push(book)
        }else if(book.shelf === 'read'){
          state.readBooks.push(book)
        }else{
          state.noneBooks.push(book)
        }
      })
    }

  componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books})
        this.classifyBooks(this.state)
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
                <CurrentReading currentBooks={this.state.currentBooks} />
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
