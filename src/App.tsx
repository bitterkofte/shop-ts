import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { RouteTree } from "./pages/RouteTree"


function App() {
  return (
    <>
      {/* <h1 className="text-xl font-bold">shop.ts</h1> */}
      <ShoppingCartProvider>
        <Navbar />
        <div className="p-10 lg:p-20 text-lg font-light">
          <RouteTree/>
        </div>
      </ShoppingCartProvider>
    </>
  )
}

export default App
