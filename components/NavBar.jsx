import React from "react";
import { Contact, MessageSquare } from "lucide-react";
import Image from "next/image";

function NavBar() {
  return (
    <div className="bg-slate-500 h-20 w-full mx-auto px-8 md:flex-row flex flex-col items-center justify-between sticky top-0 z-30">
      <div className="flex items-center">
        <Image src="/images/logo.png" width={100} height={100} />
        <div className="ml-4 flex">
          <a
            href="#"
            className="text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
          >
            Portfolio
          </a>
          <a
            href="#skills"
            className="text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
          >
            Skills
          </a>
        </div>
      </div>
      <button className="bg-white text-black flex items-center justify-center py-2 px-4 rounded-full border border-black gap-3">
        <MessageSquare />
        Contact Me
      </button>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import { Contact, MessageSquare } from "lucide-react";
// import Image from "next/image";
// function NavBar() {
//   return (
//     <div className=" bg-slate-500 h-20 w-full mx-auto px-8 flex items-center justify-between sticky top-0 z-30 ">
//       <Image src="/images/logo.png" width={100} height={100} />

//       <div className="flex">
//         <a
//           href="#"
//           className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
//         >
//           About
//         </a>
//         <a
//           href="#portfolio"
//           className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
//         >
//           Portfolio
//         </a>
//         <a
//           href="#skills"
//           className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
//         >
//           Skills
//         </a>
//       </div>

//       <button className=" bg-white text-black flex items-center justify-center py-2 px-4 rounded-full border border-black gap-3">
//         <MessageSquare />
//         Contact Me
//       </button>
//     </div>
//   );
// }

// export default NavBar;
