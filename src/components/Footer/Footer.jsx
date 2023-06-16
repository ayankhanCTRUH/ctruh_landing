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
            <li>
              <a href="https://www.ctruh.com/aboutus">About</a>
            </li>
            <li>
              <a href="https://www.ctruh.com/blogs">Blog</a>
            </li>
            <li>
              <a href="https://www.ctruh.com/Contact-us">Contact Us</a>
            </li>
            <li>
              <a href="https://in.linkedin.com/company/ctruh">Careers</a>
            </li>
          </ul>
        </section>
        <section>
          <h5 className="sectionHeading">Community</h5>
          <ul>
            <li>
              <a href="https://www.instagram.com/hello_ctruh/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/people/Ctruh/100090491642974/">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/HelloCtruh">twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ctruh/">LinkedIn</a>
            </li>
          </ul>
        </section>
        <section>
          <h5 className="sectionHeading">Legal</h5>
          <ul>
            <li>
              <a href="https://www.ctruh.com/terms-of-service">
                Terms of service
              </a>
            </li>
            <li>
              <a href="https://www.ctruh.com/privacy-policy">Privacy policy</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
