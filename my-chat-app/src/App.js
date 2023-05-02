import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import 'bootstrap/dist/css/bootstrap.min.css';
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

function App() {
return (
  <>
  <Router>
  <div className="container">
    <Header />
    <Routes>
      <Route path='/' element={<Home socket={socket}/>}></Route>
      <Route path='/login' element={<Login socket={socket}/>}></Route>
      <Route path='/register' element={<Register/>} />
      <Route path="/chat" element={<Chat socket={socket}/>}></Route>
    </Routes>
  </div>
  </Router>
  <ToastContainer />
  </>
  );
}

export default App; //if there are many components, pls use 'default'