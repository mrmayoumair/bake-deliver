import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark-transparent">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="logo-box me-2">B&amp;D</div>
          <div>
            <div className="brand-title">Bake &amp; Deliver</div>
            <div className="brand-sub">Frozen Food Menu</div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
