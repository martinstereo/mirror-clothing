import { Routes, Route, } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";


import React from 'react'
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
