import React from "react";

const Footer = () => {
  return (
    <div className="footerParent">
      <div className="footer">
        <div className="footCopy">
          Copyright <i className="fa-solid fa-copyright"></i> in 2025
        </div>
        <div className="design">Design by: Farhan Siddiqui</div>
        <div className="social">
          <a href="https://www.linkedin.com/in/farhan-siddiqui-a56ba534a/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.whatsapp.com/">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://mail.google.com/">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61572474299363">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
