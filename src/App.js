// npm install react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';
import Cart from './pages/cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
