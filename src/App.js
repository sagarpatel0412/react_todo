import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import FormOne from './FormOne';

function App() {
  return (
   <div>
   <Router>
      <Routes>
      <Route exact path="/" element={<FormOne/>} />
      {/* <Route path="/list" element={<ListOfLinks/>}/>
      <Route path="/nearby-objects" element={<AsteriodsNearBy/>}/> */}
      </Routes>

    </Router>
   </div> 
  );
}

export default App;
