import "../App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ansatte from './Employees/ShowEmployees/ShowEmployees';
import LeggTilAnsatte from './Employees/AddEmployees/AddEmployee';
import SlettAnsatte from './Employees/RemoveEmployees/RemoveEmployee';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ansatte />} />
        <Route path="/legg-til-ansatt" element={<LeggTilAnsatte />} />
        <Route path="/slett-ansatt" element={<SlettAnsatte />} />
        <Route path="*" element={<h1>404 - Siden finnes ikke</h1>} />
      </Routes>
    </Router>
  );
};