import {Routes,Route} from "react-router-dom";
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
        <Route path="/labb2/aboutme" element = {<AboutMe/>}/>
        <Route path="/labb2/cv" element = {<Cv/>}/>
        <Route path="/labb2/portfolio" element = {<Portfolio/>}/>
        <Route path="/labb2/interviews" element = {<Interviews/>}/>
        <Route path="/labb2/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
