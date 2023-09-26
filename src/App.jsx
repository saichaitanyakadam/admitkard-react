import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Otp from './pages/Otp';
import Success from './pages/Success';


function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp-verification" element={<Otp />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
