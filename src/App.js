import Navbar from './Component/Navbar';
import Curousel from '../src/Component/Curousel';
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms/>}/>
        {/* <Route path="/prize-pool" element={<PrizePool />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
