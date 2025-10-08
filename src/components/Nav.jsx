// import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo on left */}
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src="/src/images/logo.png"
            alt="Logo"
            className="img-fluid"
            width={90}
            draggable="false"
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Buttons on right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/docs">Docs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/demo">Demo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/how-it-works">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-outline-dark me-1 rounded-pill" to="/signup">
                Sign-Up
              </Link>
              <Link
                className="btn btn-primary rounded-pill"
                to="/login"
                style={{ background: "purple", border: "none" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
