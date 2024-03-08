import AboutMe from "@/components/AboutMe";
import Homepage from "@/components/Homepage";
import NavBar from "@/components/NavBar";
import React from "react";

function page() {
  return (
    <div className="bg-red-900">
      <NavBar />
      <Homepage />
      <AboutMe />
    </div>
  );
}

export default page;
