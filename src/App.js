import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/navbar/navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Houses from './Components/maisons/Houses';
import Home from './Components/maisons/Home';

function App() {
  return (
    <BrowserRouter>
     <Navbar/> 
    
    <Routes>
    <Route path="/houses" element={<Home/>} exact />

    
    </Routes>
    
    </BrowserRouter> 
    
  );
}

export default App;
