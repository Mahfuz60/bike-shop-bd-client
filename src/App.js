import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Footer from './components/pages/shared/Footer/Footer';
import NavBar from './components/pages/shared/NavBar/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
