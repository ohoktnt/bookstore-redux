import { useState } from 'react'
import BookListItem from './BookListItem'
import BookForm from './BookForm'

// import { useSelector, useDispatch } from 'react-redux'
import store from './booksInventory.js'


export default function BookList(props) {
  // const dispatch = useDispatch()

  // book list
  // each book to have: name, price, category, description
  let books = store.getState()

  function render() {
    const state = store.getState()
    books = state;
  }

  render()
  store.subscribe(render)

  // manage pop up window for book details (new and update)
  const [windowState, setWindowState] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const windowToggle = (id) => {
    setWindowState(!windowState)
    if (id) {
      const bookById = books.find(book => book.id === id);
      setSelectedBook(bookById);
    } else {
      setSelectedBook(null)
    }
  }

  const deleteBook = (e, id) => {
    e.preventDefault()
    const bookById = books.find(book => book.id === id);
    store.dispatch({type: 'deleteBook', discardBook: bookById})
  }
  
  const parsedBooksList = books.map(book => <BookListItem book={book} toggle={windowToggle} delete={deleteBook}/>)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan='4'>Books Inventory</th>
            <th><button onClick={() => windowToggle(null)}>Add Book TEST</button></th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Category</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {parsedBooksList}
        </tbody>
      </table>
        {windowState ? <BookForm toggle={windowToggle} book={selectedBook}/> : null}
    </div>
  )
}