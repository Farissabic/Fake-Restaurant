import React from 'react';
import Home from './Home';
import {Route, Routes, useLocation} from 'react-router-dom';
import Coisine from './coisine';
import Searched from './searched';
import Recipe from './recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {

  const location = useLocation();

  return (
    <div className='container'>
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname}>
            <Route path="/" element = {<Home/>}/>
            <Route path='/cuisine/:type' element = {<Coisine/>}></Route>
            <Route path='/seacrh/:input' element = {<Searched/>}></Route>
            <Route path='/recipe/:id' element= {<Recipe/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages