import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    shelves: ['currentlyReading','wantToRead','read']
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
     this.setState({ books })
    })
  }

  changeShelf(book,shelf) {
    console.log(shelf)
    BooksAPI.update(book,shelf).then((res)=> {
      console.log(res)
    })
  }

  addToShelf(book) {

  }

  render() {
    const { books, shelves } = this.state;

    return (

      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={books}
            shelves={shelves}
            onChangeShelf={this.changeShelf} />
        )} />
        <Route path='/search' render={() => (
          <SearchBook
            onAddToShelf={this.addToShelf}
            onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
