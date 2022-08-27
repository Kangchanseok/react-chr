import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chr2 from './Chr2'
import Cancer from './Cancer';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/chr2' element={<Chr2 />}></Route>
          <Route path='/cancer' element={<Cancer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
