import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mainFooterContainer">
      <div className="footerSectionContainer">
        <section>
          <img src="./ctruh logo - white.png" alt="" width={50} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          </p>
        </section>
        <section>
          <h5 className="sectionHeading">Company</h5>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </section>
        <section>
          <h5 className="sectionHeading">Community</h5>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>twitter</li>
            <li>LinkedIn</li>
          </ul>
        </section>
        <section>
          <h5 className="sectionHeading">Legal</h5>
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
