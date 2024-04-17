import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BMI from './components/BMI';
import Team from './components/Team';
import MonthlyPlan from './components/MonthlyPlan';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Team />
      <MonthlyPlan />
      <BMI />      
      <Footer />
    </div>
  )
}

export default App