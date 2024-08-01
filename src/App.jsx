import React from "react";
import { Outlet } from "react-router-dom";
import { RootProvider } from "./contexts/RootContext";
import { Header, Footer } from "./components";

const App = (props) => {
  return (
    <RootProvider>
      <Header />
      <Outlet />
      <Footer />
    </RootProvider>
  );
};

export default App;
