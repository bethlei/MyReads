import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { shelfTitle } from './utils'

class Book extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.object,
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string,
    shelves: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { authors, id, imageLinks: {thumbnail}, title, shelf, shelves, onChangeShelf } = this.props;

    if (!thumbnail) {
      let thumbnail = './icons/alt-bookcover.png'
		}

    return (
      <div key={id} className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => onChangeShelf({id}, e.target.value)}>
              <option disabled>Move to...</option>
              {shelves.map(shelf => (
                <option key={shelf} value={shelf}>{shelfTitle(shelf)}</option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    )
  }
}

export default Book
