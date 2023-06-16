import React, { useEffect } from "react";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileViewOpen, setMobileViewOpen] = useState(false);

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
      <img
        src={
          scrollPosition > 82
            ? "./ctruh logo 1080p.png"
            : "./ctruh logo - white.png"
        }
        className="logo"
        alt=""
      />

      <div
        className={
          scrollPosition > 82
            ? "header_section_one_black"
            : "header_section_one"
        }
      >
        <nav>Home</nav>
        <nav>About Us</nav>
        <nav>Blogs</nav>
        <nav className="joinButton">Join Waitlist</nav>
      </div>
      {mobileViewOpen ? (
        <div className="mobileViewMainContainer">
          <img
            className="mobileViewMenuCloseIcon"
            src="./icons8-close.svg"
            alt=""
            onClick={() => setMobileViewOpen(false)}
          />
          <div className="mobileViewInner">
            <nav>Home</nav>
            <nav>About Us</nav>
            <nav>Blogs</nav>
            <nav>Join Waitlist</nav>
          </div>
        </div>
      ) : (
        <img
          src={
            scrollPosition > 82
              ? "./icons8-hamburger-menu-black.svg"
              : "./icons8-hamburger-menu.svg"
          }
          className="mobileViewMenuOpenIcon"
          alt=""
          onClick={() => setMobileViewOpen(true)}
        />
      )}
    </header>
  );
}

export default Header;
