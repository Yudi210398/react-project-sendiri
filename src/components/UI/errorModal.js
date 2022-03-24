import React from "react";
import "./errorModal.css";

const ErroModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfrim} />
      <div className="card dana">
        <header className="header">
          <h2>{props.judul}</h2>
        </header>
        <div className="content">
          <p>{props.pesan}</p>
        </div>
        <footer className="actions">
          <button className="btn btn-danger" onClick={props.onConfrim}>
            okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErroModal;
