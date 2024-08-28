import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="shop" element={<Shop />} />
          <Route path="review" element={<Review />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="product/:productKey" element={<ProductDetail />} />
          <Route exact path="/" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;