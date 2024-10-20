import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductCart from './components/productCart'
import ProductDetails from './components/ProductDetails'


const App = () => {
  return (
    <div>

        <div className='offer_info'>
            
            <p className='offer'>Free Shipping on orders above 999/-</p>
            <p className='call-us'>Call us on: +9198768 05120</p>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductCart/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App