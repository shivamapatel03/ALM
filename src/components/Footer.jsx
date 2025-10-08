// import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white py-4 mt-5">
  <div className="row container mx-auto mb-3">
    {/* Logo Section */}
    <div className="col-12 col-md-7 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
      <img src="../src/images/logo.png" alt="Logo" height={30} />
    </div>

    {/* Right Section (Social, Contact, Links) */}
    <div className="col-12 col-md-5 d-flex flex-column flex-sm-row align-items-center align-items-md-start justify-content-around gap-4">
      
      {/* Social */}
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <h3 className="text-center text-md-start">Social</h3>
        <div className="d-flex mt-2 gap-3">
          <i className="fab fa-instagram bg-white text-dark rounded fs-5 p-2"></i>
          <i className="fab fa-facebook-f bg-white text-dark rounded fs-5 p-2"></i>
          <i className="fab fa-x bg-white text-dark rounded fs-5 p-2"></i>
        </div>
      </div>

      {/* Contact */}
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <h3>Contact</h3>
        <p className="mb-1">+91 12345 67890</p>
        <p className="mb-1">xyz road, 12239e,</p>
        <p className="mb-0">Gujarat</p>
      </div>

      {/* Quick Links */}
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <h3>Quick Links</h3>
        <div className="d-flex flex-column mt-2 gap-2">
          <Link to="/" className="text-decoration-none text-white">Features</Link>
          <Link to="/" className="text-decoration-none text-white">How it Works</Link>
          <Link to="/" className="text-decoration-none text-white">Docs</Link>
        </div>
      </div>

    </div>
  </div>

  {/* Copyright */}
  <p className="mb-0 text-center">© 2025 Your Company. All rights reserved.</p>
</div>

  )
}

export default Footer