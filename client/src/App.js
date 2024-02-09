// import logo from './logo.svg';
// import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
