import React from "react";
import Contact from "./components/contact/Contact";
import Create from "./components/create/Create";
import {Routes,Route} from "react-router-dom"
import Edit from "./components/edit/Edit";

function App() {
  return (
    <div className="felx justify-start">
      <Routes>
        <Route path='/' element={<Contact/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
