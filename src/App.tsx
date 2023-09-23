import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
