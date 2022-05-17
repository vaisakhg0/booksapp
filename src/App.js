import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbooks from './component/Addbooks';
import Bookssearch from './component/Bookssearch';

function App() {
  return (
    <div>
   
<Addbooks/>
<Bookssearch/>

    </div>
  );
}

export default App;
