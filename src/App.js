import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
     this.setState({ books });
    })
  }

  // BooksAPI.getAll().then((books) => {
  //   console.log(books);
  // });

  render() {
    const { books } = this.state;

    return (

      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
