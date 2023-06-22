import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Import Pages
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'
import Contact from '../../Pages/Contact/Contact'
import Products from '../../Pages/Products/Products'
import About from '../../Pages/About/About'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default AppRouter;
