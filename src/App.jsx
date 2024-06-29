import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/authContext"
import AllProductView from "./views/AllProductView"
//import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import { CartContextProvider } from "./context/cartContext"
import ProductDetailView from "./views/ProductDetailView"
import LoginView from "./views/LoginView"
import CartView from "./views/CartView"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <Navbar/>
          {/*<Counter />*/}
          <Routes>
            <Route path="/" element={<AllProductView/>}/>
            <Route path="/product/:id" element={<ProductDetailView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/cart" element={<ProtectedRoute> <CartView/> </ProtectedRoute>}/>
          </Routes>
          <ToastContainer />
        </CartContextProvider>
      </AuthContextProvider>
    </Router>


    
  )
}

export default App