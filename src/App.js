import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp';
import Success from './Components/Success';
import Welcom from './Components/Welcom';
import './css/main.css';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Welcom />}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/success' element={<Success />} />
        </Routes>
    </div>
  );
}

export default App;
