import Products from "./components/Products"
import { ProviderProduct } from "./contexts/productContext"

function App() {

  return (
    <ProviderProduct>
      <h1 className="text-center p-4 text-2xl font-bold bg-blue-300 uppercase" >carrito de compras</h1>
      <Products/>
    </ProviderProduct>
  )
}

export default App
