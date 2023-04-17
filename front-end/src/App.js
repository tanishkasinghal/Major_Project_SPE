import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Base } from './components/Base';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
import  Home  from './pages/Home';
import Login from './pages/Login';
import  AddEmployee  from './pages/AddEmployee';
import AddDepartment from './pages/AddDepartment.js';
import  About  from './pages/About';
import EmployeeDashboard from './user-routes/EmployeeDashboard';
import PrivateRoute from './components/PrivateRoute';
import Profile from './user-routes/Profile';
import UserProvider from './context/UserProvider';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//     <Route path="login" element={<Login />} />
//     <Route path="addEmployee" element={<AddEmployee/>}/>
//     <Route path="about" element={<About/>}/>
//     </Route>
//   )
// );

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/addDepartment" element={<AddDepartment/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/employee" element={<PrivateRoute/>}>
        <Route path="dashboard" element={<EmployeeDashboard/>}/>
        <Route path="profile-info/:id" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
