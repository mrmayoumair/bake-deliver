import React from "react";

export default function Hero() {
  return (
    <header className="hero d-flex align-items-center" id="home">
      <div className="container text-center">
        <h1 className="display-5 title">BAKE &amp; DELIVER</h1>
        <p className="lead subtitle">presents</p>
        <h2 className="hero-title">FROZEN FOOD MENU</h2>
        <div className="mt-4">
          <a href="#menu" className="btn btn-outline-gold btn-lg">
            View Menu
          </a>
        </div>
      </div>
    </header>
  );
}
