import store from '../booksInventory.js'

export default function BookForm(props) {
  const { name, price, category, description, id} = props.book ? props.book : '';

  // logic to manage if its a new book or update the book
  const saveBook = function(e) {
    e.preventDefault();
    // collect all values from input and save as newBook
    const newBook = {};
    newBook.name = document.getElementById('name').value;
    newBook.price = document.getElementById('price').value;
    newBook.category = document.getElementById('category').value;
    newBook.description = document.getElementById('description').value;

    // updating book
    if (props.book) {
      store.dispatch({type: 'updateBook', updatedBook: {...newBook, id: id}});
    // adding book
    } else {
      store.dispatch({type: 'addBook', newBook: newBook});
    }
    // close window after action is completed
    props.toggle();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={() => props.toggle()}>&times;</span>
        <h3>{props.book ? "Update Book Details" : "Add New Book"}</h3>
        <form id="book-form">
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" defaultValue={name}></input>
          </div>
          <div>
            <label htmlFor="price">Price in Cents: </label>
            <input type="text" id="price" defaultValue={price}></input>
          </div>
          <div>
            <label htmlFor="category">Category: </label>
            <input type="text" id="category" defaultValue={category}></input>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea type='text' id="description" defaultValue={description}></textarea>
          </div>
          <button onClick={(e) => saveBook(e)}> {props.book ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
}