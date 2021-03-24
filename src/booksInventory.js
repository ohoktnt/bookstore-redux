import { createStore } from 'redux'

// Initial State
const books = [
  {id: 1, name: 'Cracking the Coding Interview', price: 3799, category: 'Job Hunting', description: 'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'},
  {id: 2, name: 'The Pragmatic Progammer', price: 6087, category: 'Computer Science', description: 'Written as a series of self-contained sections and filled with classic and fresh anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best approaches and major pitfalls of many different aspects of software development.'},
  {id: 3, name: 'The Self-Taught Programmer', price: 2340, category: 'Computer Science', description: "This book is not just about learning to program; although you will learn to code. If you want to program professionally, it is not enough to learn to code; that is why, in addition to helping you learn to program, I also cover the rest of the things you need to know to program professionally that classes and books don't teach you."},
  {id: 4, name: 'Flowers for Algernon', price: 1399, category: 'Science Fiction', description: 'Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.'}
];

function booksReducer(state = books, action) {
  switch (action.type) {
    case 'addBook':
      const newBook = action.newBook
      newBook.id = Math.random().toString(36).substring(2,8);
      return [...state, newBook];
    case 'deleteBook':
      // filter through the state, and remove selected book
      const discard = action.discardBook;
      const newStateD = state.filter(book => book !== discard);
      return newStateD;
    case 'updateBook':
      // find the book with right ID, remove from state, add new book to state
      const bookToUpdate = action.updatedBook;
      const newStateU = state.map(book => {
        if (book.id === bookToUpdate.id) {
          return bookToUpdate;
        } else {
          return book;
        }
      })
      return newStateU;
    default:
      return state;
  }
}

const store = createStore(booksReducer);


export default store;