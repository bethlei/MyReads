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
      console.log(books)
     this.setState({ books })
    })
  }

  changeShelf = (book,shelf) => {
    console.log(shelf)
    console.log('book',book)
    update(book,shelf).then(()=> {
      // we don't actually need the _content_ of the response
      book.shelf = shelf
      this.setState({ books: this.state.books
        .filter(b => b.id !== book.id)
        .concat([ book ])
      })
    })
  }

  render() {
    const { books, shelves } = this.state;
    console.log(this.state.books)

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
            books={books}
            shelves={shelves}
            onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
