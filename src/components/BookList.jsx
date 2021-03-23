import BookListItem from './BookListItem'

// import { useSelector, useDispatch } from 'react-redux'
import store from './booksInventory.js'


export default function BookList(props) {
  // const dispatch = useDispatch()

  // book list
  // each book to have: name, price, category, description
  const books = store.getState()
  
  const parsedBooksList = books.map(book => <BookListItem book={book}/>)

  return (
    <table>
      <thead>
        <tr>
          <th colspan='4'>List of Books</th>
          <th><button onClick={() => store.dispatch({type: 'testBook'})}>Add Book</button></th>
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
  )
}