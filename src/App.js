import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
     this.setState({ books });
    })
  }

  render() {
    const { books } = this.state;

    return (

      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBook
            onAddToShelf={this.AddToShelf}
            onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
