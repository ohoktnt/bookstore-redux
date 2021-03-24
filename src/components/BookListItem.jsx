import store from './booksInventory.js'

export default function BookListItem(props) {
  const {name, price, category, description, id} = props.book
  return (
    <tr>
      <td onClick={() => props.toggle(id)}>{name}</td>
      <td onClick={() => props.toggle(id)}>${price/100}</td>
      <td onClick={() => props.toggle(id)}>{category}</td>
      <td onClick={() => props.toggle(id)}>{description}</td>
      <td><button onClick={() => props.delete(id)}>Delete</button></td>
    </tr>
  )
}