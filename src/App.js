import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/contextApi/AuthProvider';
import AllProducts from './components/pages/AllProducts/AllProducts/AllProducts';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';
import Order from './components/pages/Order/Order/Order';
import PageNotfound from './components/pages/PageNotfound/PageNotfound';
import Register from './components/pages/Register/Register';
import Footer from './components/pages/shared/Footer/Footer';
import NavBar from './components/pages/shared/NavBar/NavBar';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<AllProducts />} />
            <Route
              exact
              path='/orders/:productId'
              element={
                <PrivateRoute>
                  <Order />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<PageNotfound />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
