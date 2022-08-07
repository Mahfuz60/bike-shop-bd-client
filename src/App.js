import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/contextApi/AuthProvider';
import Home from './components/pages/Home/Home/Home';
import Login from './components/pages/Login/Login';
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
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
