import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import DetailsComponent from './Components/DetailsComponent';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/details" element={<DetailsComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
