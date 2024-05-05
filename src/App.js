import './App.css';
import BlogsDisplay from './Frontend/Pages/Blogs/BlogsDisplay.jsx';
import Blog from './Frontend/Pages/Blogs/Blog.jsx';
// import Blogs from './Frontend/Pages/Blogs/Blogs.jsx';
import Home from './Frontend/Pages/Home/Home.jsx';
import Login from './Frontend/Pages/Login/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './Frontend/Pages/adminHome/Home.jsx';
import Patient from './Frontend/Pages/adminPatients/Patient.jsx';
import Package from './Frontend/Pages/adminPackage/Package.jsx';
import PatientData from './Frontend/Pages/adminPatientView/PatientData.jsx';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Blogs' element={<BlogsDisplay/>}></Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Admin/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/Admin/Patient' element={<Patient/>}></Route>
    <Route path='/Admin/Package' element={<Package/>}></Route>
    <Route path='/Admin/Patient/Data' element={<PatientData/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
