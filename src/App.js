import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbooks from './component/Addbooks';
import Bookssearch from './component/Bookssearch';
import Viewbooks from './component/Viewbooks';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
<Route path='/' exact element={<Addbooks/>}/>
<Route path='/search' exact element={<Bookssearch/>}/>
<Route path='/view' exact element={<Viewbooks/>}/>

   </Routes>
   
   </BrowserRouter>


    </div>
  );
}

export default App;
