import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shijin-varghese1999/">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="mailto:shijinvargheselj1998@gmail.com">
          <EmailIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
