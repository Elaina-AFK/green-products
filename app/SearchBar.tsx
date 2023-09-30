"use client";

import { useContext } from "react";
import { ProductContext } from "./ProductProvider";

export default function SearchBar() {
  const { setSearch } = useContext(ProductContext);

  return (
    <div className="col-span-11 flex justify-center items-center text-black w-full">
      <svg
        width="20"
        height="20"
        viewBox="0 0 1024 1024"
        className="relative left-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"
        />
      </svg>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white rounded-full h-8 w-full max-w-md px-8"
        placeholder="Search by product name"
      />
    </div>
  );
}
