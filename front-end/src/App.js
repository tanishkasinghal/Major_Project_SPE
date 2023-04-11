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
import  About  from './pages/About';

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
    //<RouterProvider router={router} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
