
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Home/Login/Login/Login';
import About from './Pages/About/About/About';
import Projects from './Pages/Projects/Projects/Projects';
import Register from './Pages/Home/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
