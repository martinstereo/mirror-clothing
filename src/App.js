import { Routes, Route, } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";


import React from 'react'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
