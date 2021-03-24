import store from './booksInventory.js'

export default function BookForm(props) {
  const { name, price, category, description, id} = props.book ? props.book : ''

  // logic to manage if its a new book or update the book

  const saveBook = function(e) {
    e.preventDefault();
    // collect all values from input and save as newBook
    const newBook = {};
    newBook.name = document.getElementById('name').value;
    newBook.price = document.getElementById('price').value;
    newBook.category = document.getElementById('category').value;
    newBook.description = document.getElementById('description').value;
    console.log(newBook)
    // updating book
    if (props.book) {
      store.dispatch({type: 'updateBook', updateBook: {...newBook, id: id}})
    // adding book
    } else {
      store.dispatch({type: 'addBook', newBook: newBook})
    }
    props.toggle();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={() => props.toggle()}>&times;</span>
        <h3>{props.book ? "Update Book Details" : "Add New Book"}</h3>
        <form id="book-form">
          <div>
            <label for="name">Name: </label>
            <input type="text" id="name" defaultValue={name}></input>
          </div>
          <div>
            <label for="price">Price in Cents: </label>
            <input type="text" id="price" defaultValue={price}></input>
          </div>
          <div>
            <label for="category">Category: </label>
            <input type="text" id="category" defaultValue={category}></input>
          </div>
          <div>
            <label for="description">Description: </label>
            <input type='text' id="description" defaultValue={description}></input>
          </div>
          <button onClick={(e) => saveBook(e)}> {props.book ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  )

}