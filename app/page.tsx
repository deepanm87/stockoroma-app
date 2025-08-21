export default function Home() {
  return (
    <main className="wrapper">

      <div className="pt-6 space-y-12">
        <div className="space-y-2">
        <h2>Inventory Management 🛒</h2>
        <h3>Add a new product to the warehouse</h3>
      </div>

      <form className="space-y-4">
        <label htmlFor="product-name">Product name</label>
        <input type="text" placeholder="Product name" />
        <label htmlFor="quantity">Quantity</label>
        <input type="number" placeholder="quantity" />
        <button type="submit" className="submit-button">Add</button>
      </form>
      </div>

    </main>
  )
}
