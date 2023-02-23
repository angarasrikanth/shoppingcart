
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Product from './components/products/Product';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cart from './components/cart/cart';
import logo from "./static/images/logo.png";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img className="navbar-brand" src={logo} alt="Sabka Bazaar"></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Register</a>
            </li>
          <a className="navbar-text login_right" href="/">Login</a>
      </ul>
    </div>
  </div>
</nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}>
         
        </Route>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
