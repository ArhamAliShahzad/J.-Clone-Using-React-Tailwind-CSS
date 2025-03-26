import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
