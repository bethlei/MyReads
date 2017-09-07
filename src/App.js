import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { getAll, update } from './BooksAPI'
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
    getAll().then((books) => {
     this.setState({ books })
    })
  }

  changeShelf = (book,shelf) => {
    update(book,shelf).then(()=> {
      // we don't need the _content_ of the response
      book.shelf = shelf
      this.setState({ books: this.state.books
        .filter(b => b.id !== book.id)
        .concat([ book ])
      })
    })
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
            categorizedBooks={books}
            shelves={shelves}
            onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
