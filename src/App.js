import React from "react";
import { Routes, Route } from "react-router-dom";

// main components
import Home from "./MainComponent/Home";
import About from "./MainComponent/About";
import Education from "./MainComponent/Education";
import JobExperience from "./MainComponent/JobExperience";
import Media from "./MainComponent/Media";
import Contact from "./MainComponent/Contact";

// authentication component
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ForgetPassword from "./Authentication/ForgetPassword";



const App = () => {
  return (
    <>
      <Routes>
        {/* // authentication routing */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* // main page routing  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/job-experience" element={<JobExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  );
};

export default App;
