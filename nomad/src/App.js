////////////////////////
///////COMPONENTS///////
////////////////////////
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import './App.css';

////////////////////////
///////COMPONENTS///////
////////////////////////

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList/>} exact></Route>   
          <Route path="/details" element={<Details/>} exact></Route>       
          <Route path="/cart" element={<Cart/>} exact></Route>       
          <Route element={<Default/>} exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
