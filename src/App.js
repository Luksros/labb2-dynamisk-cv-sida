import {Routes,Route,Navigate, Switch} from "react-router-dom";
import React from 'react';
import AboutMe from './reactPages/AboutMe'
import Interviews from './reactPages/Interviews'
import Contact from './reactPages/Contact'
import Portfolio from './reactPages/Portfolio'
import Cv from './reactPages/Cv'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/labb2/aboutme"></Navigate>}/>           */}
        <Route exact path="/" element = {<AboutMe/>}/>
        <Route path="/cv" element = {<Cv/>}/>
        <Route path="/portfolio" element = {<Portfolio/>}/>
        <Route path="/interviews" element = {<Interviews/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
