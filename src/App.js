import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home'
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route path ='/home' exact Component={Home}/>
        <Route path ='/services' exact Component={Services}/>
        <Route path ='/products' exact Component={Products}/>
        <Route path ='/sign-up' exact Component={SignUp}/>
      </Routes>
    </Router>
    
  );
}

export default App;
