import React from "react";

export default function Footer() {
  return (
    <footer className="py-4" id="about">
      <div className="container text-center text-muted small">
        <p className="mb-1">
          © {new Date().getFullYear()} Bake &amp; Deliver — All rights reserved.
        </p>
        <p className="mb-0">
          * Continental food items also available. Delivery charges vary by
          area.
        </p>
      </div>
    </footer>
  );
}
