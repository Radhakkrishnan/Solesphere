import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Layout from './Components/layout'
import Navbar from './Components/navbar'
import LandingPage from './Pages/LandingPage'
import ShopPage from './Pages/ShopPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'
import ContactPage from './Pages/ContactPage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/product/:id' element={<ProductDetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
