import React from "react";

export default function Contact() {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h3 className="section-title">Contact & Order</h3>
        <div className="row align-items-center mt-3">
          <div className="col-md-6">
            <p className="lead">
              Place your order — WhatsApp or follow us on social media.
            </p>
            <ul className="contact-list list-unstyled">
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/923214036261"
                  target="_blank"
                  rel="noreferrer"
                >
                  +92 321-4036261
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://instagram.com/bakeanddeliver"
                  target="_blank"
                  rel="noreferrer"
                >
                  @bakeanddeliver
                </a>
              </li>
              <li>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://facebook.com/bakendeliver"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bakeanddeliver
                </a>
              </li>
            </ul>

            <div className="mt-3">
              <a
                className="btn btn-success btn-lg me-2"
                href="https://wa.me/923214036261"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a className="btn btn-outline-gold btn-lg" href="#menu">
                <i className="bi bi-card-list"></i> View Menu
              </a>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="contact-card p-4">
              <div className="logo-big">B&amp;D</div>
              <p className="mb-0">
                Fresh, tasty &amp; ready to deliver — straight from our kitchen
                to yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
