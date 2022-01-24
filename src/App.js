
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
import Contact from './Pages/Home/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './Pages/Dashboard/AddService/AddService';
import OrderList from './Pages/Dashboard/OrderList/OrderList';
import Services from './Pages/Services/Services/Services';
import AddProject from './Pages/Dashboard/AddProject/AddProject';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="orderList" element={<OrderList />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addService" element={<AddService />} />
            <Route path="addProject" element={<AddProject />} />

          </Route>
          <Route path="services" element={<Services />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
