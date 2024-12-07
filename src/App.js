// External Libraries
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

// Redux
import { setCurrentUser } from "./store/user/user.action";
import { setCategoriesMap } from "./store/categories/categories.action";

// Utils
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getCategoriesAndDocuments
} from './utils/firebase/firebase.utils';

// Components
import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
