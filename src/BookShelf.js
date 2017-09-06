import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, shelves, onChangeShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map(book => {
          const { id, authors,imageLinks, shelf, title } = book
          return (
            <li key={id}>
              <Book
                authors={authors}
                id={id}
                imageLinks={imageLinks}
                title={title}
                shelf={shelf}
                shelves={shelves}
                onChangeShelf={onChangeShelf}
                />
            </li>
          )
        })}
      </ol>
    )
  }
}

export default BookShelf
