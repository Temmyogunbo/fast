import React from "react";

export const Card = ({ title, body }: { title: string; body: string }) => (
  <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </div>
  </div>
);
