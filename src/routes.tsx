import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
)

export default Rotas
