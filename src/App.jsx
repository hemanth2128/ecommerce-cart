import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"
import "./styles/app.css"

function App() {
  return (
    <div className="container">

      <h1 className="title">
        E-Commerce Cart System
      </h1>

      <ProductList />

      <Cart />

      <CheckoutForm />

    </div>
  )
}

export default App