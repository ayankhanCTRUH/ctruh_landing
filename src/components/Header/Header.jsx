import React, { useEffect } from "react";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className={scrollPosition > 82 ? "headerWhite" : "header"}>
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
