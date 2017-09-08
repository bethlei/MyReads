import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = (props) => {
  const { books, shelves, onChangeShelf } = props
  return (
    <ol className="books-grid">
      {books.map(book => {
        const { id, authors, imageLinks, shelf, title } = book
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

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf
