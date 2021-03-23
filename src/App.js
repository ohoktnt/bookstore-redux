import './App.css';
import BookList from './components/BookList'

function App() {

  return (
    <div className="App">
      <h1>Bookstore for BlazeSoft</h1>
      <p>By Tammy Tran</p>
      <ol>
        <li>develop a bookstore: SPA w/ book details, the main page should have a book list showing name, price, category, and a delete button at the end for each book, should be an add button at the top so the users can add a book</li>
        <li>clicking on add a book buttom, it should popup a page, let the user add a book(name, price, category and description</li>
        <li>the book should be clickable, if user clicks the book, a popup page to let user to modify the name, price, category, and descritption, after modifications: the book details should be update in the main page</li>
        <li>Once clicked delete button, the book should be deleted from the main page</li>
      </ol>
      <BookList />
    </div>
  );
}

export default App;
