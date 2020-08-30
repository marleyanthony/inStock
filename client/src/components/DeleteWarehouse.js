import React from 'react';
import { Link } from "react-router-dom";
import close from "../assets/Icons/close-24px.svg"

function DeleteItem() {
  return (
    <section className="delete-modal">
      <Link to="/warehouse">
        <img src={close} alt="close" className="delete-modal__close-btn" />
      </Link>
      <h1 className="delete-modal__header">
        Delete King West warehouse?
      </h1>
      <p className="delete-modal__warning">
        Please confirm that you'd like to delete King West from the list of warehouses. You won't be able to undo this action.
      </p>
      <div className="delete-modal__delete-action-btn-container">
        <Link to="/warehouse">
          <button className="delete-modal__cancel-btn">Cancel</button>
        </Link>
        <button className="delete-modal__delete-btn">Delete</button>
      </div>
    </section>
  );
}

export default DeleteItem
