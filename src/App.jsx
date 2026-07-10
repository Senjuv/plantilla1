import Home from './pages/home';
import Productos from './pages/productos';
import Product from './pages/product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
