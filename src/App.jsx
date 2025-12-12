import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import References from './pages/References';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<About />} />
          <Route path="urunler" element={<Products />} />
          <Route path="urunler/:productId" element={<ProductDetail />} />
          <Route path="referanslar" element={<References />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
