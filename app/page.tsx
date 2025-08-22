export default function Home() {

  const handleSubmit = async (formData: FormData) => {
    "use server"
    const productName = formData.get("product-name")
    const quantity = formData.get("quantity")

  }

  return (
    <main className="wrapper">

      <div className="pt-6 space-y-12">

        <div className="space-y-2">
          <h2>Inventory Management 🛒</h2>
          <h3>Add a new product to the warehouse</h3>
        </div>

        <form className="space-y-4" action={handleSubmit}>
          <label htmlFor="product-name" className="text-color-black">Product name</label>
          <input 
            type="text" 
            placeholder="Product name" 
            id="product-name"
            name="product-name"
          />
          <label htmlFor="quantity">Quantity</label>
          <input 
            type="number" 
            placeholder="quantity" 
            id="quantity"
            name="quantity"
          />
          <button type="submit" className="submit-button">Add</button>
        </form>

      </div>

    </main>
  )
}
