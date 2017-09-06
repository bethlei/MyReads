
export const shelfTitle = (string) => string.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5')

export const booksByShelf = (books, shelf) =>
  books.filter(book => book.shelf === shelf)
