import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from "./component/NotFound";
import CategoryItemList from './pages/CategoryItemList';

function App() {
  
  return (
    <BrowserRouter>
      <div id="wrap" className="main">
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>} /> {/* exact 쓰면 path주소가 정확히 일치할 때 보여줌 */}
          <Route exact path="/od/cart" element={<Cart/>} />
          <Route path="/goods/categoryItemList" element={<CategoryItemList/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;