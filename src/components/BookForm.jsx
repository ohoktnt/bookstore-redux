
export default function BookForm(props) {
  const { name, price, category, description, id} = props.book ? props.book : ''

  return (
    <div class="modal">
      <div class="modal-content">
        <span onClick={() => props.toggle()}>&times;</span>
        <h3>New/Update Book</h3>
        <form>
          <div>
            <label for="title">Title: </label>
            <input type="text" id="title" required value={name}></input>
          </div>
          <div>
            <label for="price">Price in Cents: </label>
            <input type="text" id="price" required value={price}></input>
          </div>
          <div>
            <label for="category">Category: </label>
            <input type="text" id="category" required value={category}></input>
          </div>
          <div>
            <label for="description">Description: </label>
            <input type='text' id="description" required value={description}></input>
          </div>
          <button>Save</button>
        </form>
      </div>
    </div>
  )

}