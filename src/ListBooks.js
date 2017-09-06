import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { shelfTitle, booksByShelf } from './utils'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, shelves, onChangeShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={shelf} className="bookshelf">
              <h2 className="bookshelf-title">{shelfTitle(shelf)}</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={booksByShelf(books, shelf)}
                  shelves={shelves}
                  onChangeShelf={onChangeShelf} />
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link to ='/search' className='add-contact'>Add Contact</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
