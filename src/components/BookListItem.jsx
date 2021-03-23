import store from './booksInventory.js'

export default function BookListItem(props) {
  const {name, price, category, description} = props.book
  return (
    <tr>
      <td>{name}</td>
      <td>${price/100}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td><button>Delete</button></td>
    </tr>
  )
}