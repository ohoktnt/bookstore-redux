import store from './booksInventory.js'

export default function BookListItem(props) {
  const {name, price, category, description, id} = props.book
  return (
    <tr id={id} onClick={() => props.toggle(id)}>
      <td>{name}</td>
      <td>${price/100}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td><button>Delete</button></td>
    </tr>
  )
}