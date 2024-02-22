
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0)
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
