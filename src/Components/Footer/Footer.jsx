import React from "react";
import "./Footer.css";
import footer from "../../assets-20230710T085607Z-001/assets/img/footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footerbox">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Tech Talks</h2>
            </div>
            <p>
              Embarace the future of innovation and technolagy with our
              cutting-edge tech buissness solution
            </p>
          </div>

          <div className="footerbox">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                
                <a href="">Our programs</a>
              </li>
              <li>
                
                <a href="">Our plan</a>
              </li>
              <li>
              <a href="">Become a member</a>
              </li>
            </ul>
          </div>
          <div className="footerbox">
            <h4 className="footer_title">Quick links</h4>
            <ul className="footer_links">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                
                <a href="">Support us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
