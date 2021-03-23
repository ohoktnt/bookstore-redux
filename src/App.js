import logo from './logo.svg';
import './App.css';

function App() {
  // book list
  // each book to have: name, price, category, description
  const books = [
    {id: 1, name: 'Cracking the Coding Interview', price: 3799, category: 'Job Hunting', description: 'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'},
    {id: 2, name: 'The Pragmatic Progammer', price: 6087, category: 'Computer Science', description: 'Written as a series of self-contained sections and filled with classic and fresh anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best approaches and major pitfalls of many different aspects of software development.'},
    {id: 3, name: 'The Self-Taught Programmer', price: 2340, category: 'Computer Science', description: "This book is not just about learning to program; although you will learn to code. If you want to program professionally, it is not enough to learn to code; that is why, in addition to helping you learn to program, I also cover the rest of the things you need to know to program professionally that classes and books don't teach you."},
    {id: 4, name: 'Flowers for Algernon', price: 1399, categegory: 'Science Fiction', description: 'Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.'}
  ]


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
    </div>
  );
}

export default App;
