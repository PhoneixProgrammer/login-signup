
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginsignup from './Components/LoginSignUp/LoginSignup';
import Login from './screens/login'
import { useSelector, useDispatch} from 'react-redux';
import {increment,decrement,reset} from './features/counterSlice';
function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginsignup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/counter' element={
            <div style ={{textAlign:'center',marginTop:'30px'}}>
              <h2>Redux Counter Example</h2>
              <h2>Count:{count}</h2>
              <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
              <button onClick={()=>dispatch(increment())}>➕Increment</button>
              <button onClick={()=>dispatch(decrement())}>➖Decrement</button>
              <button onClick={()=>dispatch(reset())}>🔄Reset</button>
              </div>
            </div>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
