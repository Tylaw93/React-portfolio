import React from "react";

export default function Footer  () {
    return(
        <footer className="bg-black md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="https://github.com/Tylaw93" className="mr-10 hover:text-white">
              Github 
            </a>
            <a  href="w" className="mr-5 hover:text-white">
              Resume
            </a>
           
          </nav>
          
        </div>
      </footer>
  )
};