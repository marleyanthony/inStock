import React from 'react';
import { Link } from "react-router-dom";
import close from "../assets/Icons/close-24px.svg"

import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

function DeleteItem({ warehouses }) {
  const warehouseList = warehouses.map((warehouse) => {
    const navLink = warehouse.name.split(" ").join("");

    return (
      <div className="warehouses-delete__item" key={warehouse.id}>
        <div className="warehouses-delete__item-left-container">
          <p className="warehouses-delete__label">WAREHOUSE</p>
          <Link to={`/warehouse/${navLink}`} className="warehouses-delete__link">
            <h3 className="warehouses-delete__text-location">{warehouse.name}</h3>
            <img
              src={chevronIcon}
              alt=""
              className="warehouses-delete__icon warehouses-delete__icon--chevron"
            />
          </Link>
          <p className="warehouses-delete__label">ADDRESS</p>
          <p className="warehouses-delete__text-address">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>

        <div className="warehouses-delete__item-right-container">
          <p className="warehouses-delete__label">CONTACT NAME</p>
          <p className="warehouses-delete__text-contact-name">
            {warehouse.contact.name}
          </p>
          <div className="warehouses-delete__contact-info-container">
            <p className="warehouses-delete__label">CONTACT INFORMATION</p>
            <p className="warehouses-delete__text-contact-phone">
              {warehouse.contact.phone}
            </p>
            <p className="warehouses-delete__text-contact-email">
              {warehouse.contact.email}
            </p>
          </div>
        </div>

        <div className="warehouses-delete__item-icons-container">
          <Link to={'delete-warehouse'} className="warehouses-delete__link">
            <img src={deleteIcon} alt="" className="warehouses-delete__icon" />
          </Link>
          <img src={editIcon} alt="" className="warehouses-delete__icon" />
        </div>
      </div>
    );
  });

  return (
    <>
      <main className="warehouses-delete">
        <section className="warehouses-delete__header-container">
          <h1 className="warehouses-delete__heading">Warehouses-delete</h1>
          <div className="warehouses-delete__search-add">
            <label htmlFor="search" className="warehouses-delete__search-label">
              <input
                type="search"
                className="warehouses-delete__searchbar"
                name="search"
                placeholder="Search..."
              />
              <img src={searchIcon} alt="" className="warehouses-delete__search-icon" />
            </label>
            <button className="warehouses-delete__button">+ Add New Warehouse</button>
          </div>
        </section>

        <section className="warehouses-delete__list">
          <div className="warehouses-delete__sort">
            <div className="warehouses-delete__sort-left">
              <div className="warehouses-delete__sort-category sort-warehouse">
                <p className="warehouses-delete__sort-label">WAREHOUSE</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="warehouses-delete__icon warehouses-delete__icon--sort"
                />
              </div>
              <div className="warehouses-delete__sort-category sort-address">
                <p className="warehouses-delete__sort-label">ADDRESS</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="warehouses-delete__icon warehouses-delete__icon--sort"
                />
              </div>
            </div>
            <div className="warehouses-delete__sort-right">
              <div className="warehouses-delete__sort-category sort-name">
                <p className="warehouses-delete__sort-label">CONTACT NAME</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="warehouses-delete__icon warehouses-delete__icon--sort"
                />
              </div>
              <div className="warehouses-delete__sort-category sort-info">
                <p className="warehouses-delete__sort-label">CONTACT INFORMATION</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="warehouses-delete__icon warehouses-delete__icon--sort"
                />
              </div>
            </div>
            <p className="warehouses-delete__sort-label sort-actions">ACTIONS</p>
          </div>
          {warehouseList}
        </section>
      </main>

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
    </>
  );
}

export default DeleteItem