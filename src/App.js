import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import NoMatch from './NoMatch'
import { getAll, update } from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
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
      this.setState(previousState => ({
        books: previousState.books
        .filter(b=> b.id !== book.id)
        .concat([book])
      }))
    })
  }

  render() {
    const { books } = this.state
    const shelves = ['currentlyReading','wantToRead','read']

    return (
      <div>
      <Switch>
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
        <Route render={() => (
          <NoMatch />
        )} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp;
