import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full h-[100px] bg-gray-400">
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
