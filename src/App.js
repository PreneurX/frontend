import Navbar from './Component/Navbar';
import Curousel from '../src/Component/Curousel';
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';
import AboutUs from './Pages/Aboutus';
import StudentDashboard from './Pages/StudentDashboard';
import Voting from './Component/Voting';
import ClassClash from './Pages/ClassClash';
import Privacy from './Pages/Privacy';
import Rules from './Component/Rules';
import Round2 from './Pages/Round2';
import Finale from './Pages/Finale';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/classclash" element={<ClassClash />} />
        <Route path="/policy" element={<Privacy />} />
                <Route path="/rules" element={<Rules />} />
                                <Route path="/round2" element={<Round2 />} />
                <Route path="/finale" element={<Finale />} />











        {/* <Route path="/prize-pool" element={<PrizePool />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} /> */}

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
