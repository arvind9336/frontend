import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Private from './components/Private';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private/>}>
          <Route path='/' element={<ProductList />}/>
          <Route path='/add' element={<AddProduct />}/>
          <Route path='/update/:id' element={<UpdateProduct />}/>
          <Route path='/profile' element={<h2>Profile</h2>}/>
          <Route path='/logout' element={<h2>Logout</h2>}/>
          </Route>
          <Route path='/register' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
