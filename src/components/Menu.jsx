import React, { useState } from "react";
import { menuData } from "../data";

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? menuData
      : menuData.filter((cat) => cat.category === filter);

  return (
    <section className="py-5" id="menu">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div>
            <h3 className="section-title">Our Menu</h3>
            <p className="text-muted small">
              Click a category to filter items.
            </p>
          </div>
          <div className="btn-group flex-wrap">
            {["All", ...menuData.map((m) => m.category)].map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm btn-outline-gold ${
                  filter === cat ? "active" : ""
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="row mt-4">
          {filtered.map((menu) => (
            <div key={menu.category} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-dark h-100">
                <div className="card-body">
                  <h5 className="card-title">{menu.category}</h5>
                  <ul className="list-unstyled menu-list">
                    {menu.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <span className="price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card note-card mt-3">
          <div className="card-body">
            <strong>Continental Food:</strong> Continental food items also
            available. <br />
            <em>Delivery charges vary by area.</em>
          </div>
        </div>
      </div>
    </section>
  );
}
