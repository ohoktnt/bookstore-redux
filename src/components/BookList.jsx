import { useState } from 'react'
import BookListItem from './BookListItem'
import BookForm from './BookForm'

// import { useSelector, useDispatch } from 'react-redux'
import store from './booksInventory.js'


export default function BookList(props) {
  // const dispatch = useDispatch()

  // book list
  // each book to have: name, price, category, description
  const books = store.getState()

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
  
  const parsedBooksList = books.map(book => <BookListItem book={book} toggle={windowToggle}/>)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan='4'>Books Inventory</th>
            <th><button onClick={() => store.dispatch({type: 'testBook'})}>Add Book</button></th>
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