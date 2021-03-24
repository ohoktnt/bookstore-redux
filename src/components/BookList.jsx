import { useState } from 'react';

import store from '../booksInventory.js';

import BookListItem from './BookListItem';
import BookForm from './BookForm';

export default function BookList(props) {
  // each book to have: name, price, category, description
  let books = store.getState();

  // manage state in the store
  function render() {
    const state = store.getState();
    books = state;
  }

  render();
  store.subscribe(render);

  // manage pop up window for book details (add and update)
  const [windowState, setWindowState] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const windowToggle = (id) => {
    setWindowState(!windowState);
    if (id) {
      const bookById = books.find(book => book.id === id);
      setSelectedBook(bookById);
    } else {
      setSelectedBook(null);
    }
  }

  const deleteBook = function(e, id) {
    e.stopPropagation();
    const bookById = books.find(book => book.id === id);
    store.dispatch({type: 'deleteBook', discardBook: bookById});
    // force render to show book removed
    setWindowState(null);
  }
  
  const parsedBooksList = books.map(book => <BookListItem key={book.id} book={book} toggle={windowToggle} delete={deleteBook}/>);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan='4'>Books Inventory</th>
            <th><button onClick={() => windowToggle(null)}>Add New Book</button></th>
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
  );
}