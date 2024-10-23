import React from "react";
import "./App.css";
import Profile from "./main/Profile/index";
import Resume from "./main/Resume/index";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./main/Navbar";
import Footer from "./main/Footer";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Navbar />
      </div>
      <main className="py-24 container">
        <div id="about-me">
        <Profile />
        </div>
        <Resume />
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;