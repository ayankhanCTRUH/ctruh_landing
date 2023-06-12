import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <nav>
          <img src="./logo (2).png" width={80} alt="" />
        </nav>
      </div>
      <div className="header_section_one">
        <nav>Home</nav>
        <nav>About Us</nav>
        <nav>Pricing</nav>
        <nav>Dashboard</nav>
      </div>
    </header>
  );
}

export default Header;
