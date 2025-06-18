
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginsignup from './Components/LoginSignUp/LoginSignup';
import Login from './screens/login'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginsignup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
