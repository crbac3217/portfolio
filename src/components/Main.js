import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blogpost from '../pages/Blogpost.js';
import Contact from '../pages/Contact.js';
import Page2D from '../pages/Page2D.js';
import Page3D from '../pages/Page3D.js';
import PageGame from '../pages/PageGame';
import Mainscreen from '../pages/MainScreen.js';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={ <Mainscreen/> } />
      <Route path="/Contact" element={ <Contact/> } />
      <Route path="/2D" element = {<Page2D />} />
    </Routes>
  );
}

export default Main