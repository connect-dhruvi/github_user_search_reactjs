import React from 'react';
import {Routes , Route} from "react-router-dom";
import {Home , About ,Contact ,Events ,CompnayHistory , Location , NotFound} from './pages';

function App5(){
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}>
                <Route path="/location" element={<Location/>}/>
                <Route path="/history" element={<CompnayHistory/>}/>
            </Route>
            <Route path="/events" element={<Events/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App5;