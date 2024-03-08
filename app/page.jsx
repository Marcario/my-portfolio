import AboutMe from "@/components/AboutMe";
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
    </div>
  );
}

export default page;
