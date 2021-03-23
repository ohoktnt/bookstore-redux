import BookListItem from './BookListItem'

export default function BookList(props) {
  // book list
  // each book to have: name, price, category, description
  const books = [
    {id: 1, name: 'Cracking the Coding Interview', price: 3799, category: 'Job Hunting', description: 'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'},
    {id: 2, name: 'The Pragmatic Progammer', price: 6087, category: 'Computer Science', description: 'Written as a series of self-contained sections and filled with classic and fresh anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best approaches and major pitfalls of many different aspects of software development.'},
    {id: 3, name: 'The Self-Taught Programmer', price: 2340, category: 'Computer Science', description: "This book is not just about learning to program; although you will learn to code. If you want to program professionally, it is not enough to learn to code; that is why, in addition to helping you learn to program, I also cover the rest of the things you need to know to program professionally that classes and books don't teach you."},
    {id: 4, name: 'Flowers for Algernon', price: 1399, category: 'Science Fiction', description: 'Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.'}
  ]

  const parsedBooksList = books.map(book => <BookListItem book={book}/>)

  return (
    <table>
      <thead>
        <tr>
          <th colspan='4'>List of Books</th>
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