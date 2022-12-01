import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

