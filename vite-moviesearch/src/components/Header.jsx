import favicon from "../assets/favicon.ico";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="display: flex h-20 relative flex items-center px-10 ">
      <a className="text-xl font-extrabold  w-28 h-6 mr-20" href="/">
        <span className="text-regal-yellow ">OMDbAPI</span>
        .COM
      </a>
      <nav>
        <ul className="display: flex flex-wrap: wrap text-xl text-regal-yellow ">
          <li
            className={`w-20 m-0 h-10 flex items-center justify-center ${
              location.pathname === "/"
                ? "bg-regal-yellow text-white"
                : "active:bg-regal-yellow hover:text-yellow-300 "
            } rounded-lg py-2 px-4`}
          >
            <a href="/">Search</a>
          </li>

          <li
            className={`w-20 m-0 h-10 flex items-center justify-center ${
              location.pathname === "/movies"
                ? "bg-regal-yellow text-white"
                : "active:bg-regal-yellow hover:text-yellow-300 "
            } rounded-lg py-2 px-4`}
          >
            <a href="/movies">Movie</a>
          </li>

          <li
            className={`w-20 m-0 h-10 flex items-center justify-center ${
              location.pathname === "/About"
                ? "bg-regal-yellow text-white"
                : "active:bg-regal-yellow hover:text-yellow-300"
            } rounded-lg py-2 px-4`}
          >
            <a href="/About">About</a>
          </li>
        </ul>
      </nav>
      <div className="p-2 bg-gray-200 rounded-full ml-auto">
        <a href="/About">
          <img className="w-8 h-8" src={favicon} alt="heropy"></img>
        </a>
      </div>
    </header>
  );
}
