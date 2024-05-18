import './App.css';
import BlogsDisplay from './Frontend/Pages/Blogs/BlogsDisplay.jsx';
import Blog from './Frontend/Pages/Blogs/Blog.jsx';
import Home from './Frontend/Pages/Home/Home.jsx';
import Login from './Frontend/Pages/Login/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './Frontend/Pages/adminHome/Home.jsx';  //backend
import Patient from './Frontend/Pages/adminPatients/Patient.jsx';
import Package from './Frontend/Pages/adminPackage/Package.jsx';
import PatientData from './Frontend/Pages/adminPatientView/PatientData.jsx';
import SettingsPage from './Frontend/Pages/UserSettings/Settings.jsx';
import Contactus from './Frontend/Pages/Contactus/Contactus.jsx';
import ViewPlans from './Frontend/Pages/ViewPlans/ViewPlans.jsx';
import Histroy from './Frontend/Pages/Histroy/Histroy.jsx';
import HistroyDetails from './Frontend/Pages/histroyDetails/HistroyDetails.jsx';
import Appointment from './Frontend/Pages/Appointment/Appointment.jsx';
import AboutUs from './Frontend/Pages/AboutUs/AboutUs.jsx';
import Services from './Frontend/Pages/Services/Services.jsx';
import PersonalInfo from './Frontend/Pages/PersonalInfo/PersonalInfo.jsx';
import Booking from './Frontend/Pages/Booking/Booking.jsx';
import { DataProvider } from "./Frontend/ContextApi/DataContent.js";
import AddPrescription from './Frontend/Pages/AddPrescription/AddPrescription.jsx';
import AddPlans from './Frontend/Pages/AddPlans/AddPlans.jsx';
function App() {
  return (
    <DataProvider>
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Contactus' element={<Contactus/>}></Route>
    <Route path='/Aboutus' element={<AboutUs/>}></Route>
    <Route path='/Blogs' element={<BlogsDisplay/>}></Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Settings' element={<SettingsPage/>}></Route>
    <Route path='/Plans' element={<ViewPlans/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    <Route path='/Histroy' element={<Histroy/>}></Route>
    <Route path='/Appointments' element={<Appointment/>}></Route>
    <Route path='/Info' element={<PersonalInfo/>}></Route>
    <Route path='/Booking' element={<Booking/>}></Route>
    <Route path='/AddPrescription' element={<AddPrescription/>}></Route>
    <Route path='/Histroy/details' element={<HistroyDetails/>}></Route>
    <Route path='/Admin/Dashboard' element={<Dashboard/>}></Route> 
    <Route path='/Admin/Patient' element={<Patient/>}></Route>
    <Route path='/Admin/Package' element={<Package/>}></Route>
    <Route path='/Admin/Patient/Data' element={<PatientData/>}></Route>
            <Route path='/AddPlan' element={<AddPlans />}></Route>       
    </Routes>
    </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;





