import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import React from "react";

function page() {
  return (
    <div className="bg-red-900">
      <NavBar />
      <Homepage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default page;
