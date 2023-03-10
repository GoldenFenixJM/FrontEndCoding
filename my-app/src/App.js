import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div className="App">
      <PersonalInfo
  name="Juan Manuel Pulido Moreno"
  photo="photojm.jpg"
  birthdate="21/01/2002"
/>
      <Education />
      <Experience />
    </div>
  );
}

export default App;