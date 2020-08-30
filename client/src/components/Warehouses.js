import React from "react";
import { Link } from "react-router-dom";

import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const Warehouses = ({ warehouses }) => {
  // console.log("warehouses:", warehouses);
  const warehouseList = warehouses.map((warehouse) => {
    // this is a temporary fix for using the name as a URL path
    // if a name has a space (eg. 'King West'), this removes the space
    // it would be better to modify the data to include a 'navLink' value
    const navLink = warehouse.name.split(" ").join("");

    return (
      <div className="warehouses__item" key={warehouse.id}>
        <div className="warehouses__item-left-container">
          <p className="warehouses__label">WAREHOUSE</p>
          <Link to={`/warehouse/${navLink}`} className="warehouses__link">
            <h3 className="warehouses__text-location">{warehouse.name}</h3>
            <img
              src={chevronIcon}
              alt=""
              className="warehouses__icon warehouses__icon--chevron"
            />
          </Link>
          <p className="warehouses__label">ADDRESS</p>
          <p className="warehouses__text-address">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>

        <div className="warehouses__item-right-container">
          <p className="warehouses__label">CONTACT NAME</p>
          <p className="warehouses__text-contact-name">
            {warehouse.contact.name}
          </p>
          <div className="warehouses__contact-info-container">
            <p className="warehouses__label">CONTACT INFORMATION</p>
            <p className="warehouses__text-contact-phone">
              {warehouse.contact.phone}
            </p>
            <p className="warehouses__text-contact-email">
              {warehouse.contact.email}
            </p>
          </div>
        </div>

        <div className="warehouses__item-icons-container">
          <Link to={'delete-warehouse'} className="warehouses__link">
            <img src={deleteIcon} alt="" className="warehouses__icon" />
          </Link>
          <img src={editIcon} alt="" className="warehouses__icon" />
        </div>
      </div>
    );
  });

  return (
    <main className="warehouses">
      <section className="warehouses__header-container">
        <h1 className="warehouses__heading">Warehouses</h1>
        <div className="warehouses__search-add">
          <label htmlFor="search" className="warehouses__search-label">
            <input
              type="search"
              className="warehouses__searchbar"
              name="search"
              placeholder="Search..."
            />
            <img src={searchIcon} alt="" className="warehouses__search-icon" />
          </label>
          <button className="warehouses__button">+ Add New Warehouse</button>
        </div>
      </section>

      <section className="warehouses__list">
        <div className="warehouses__sort">
          <div className="warehouses__sort-left">
            <div className="warehouses__sort-category sort-warehouse">
              <p className="warehouses__sort-label">WAREHOUSE</p>
              <img
                src={sortIcon}
                alt=""
                className="warehouses__icon warehouses__icon--sort"
              />
            </div>
            <div className="warehouses__sort-category sort-address">
              <p className="warehouses__sort-label">ADDRESS</p>
              <img
                src={sortIcon}
                alt=""
                className="warehouses__icon warehouses__icon--sort"
              />
            </div>
          </div>
          <div className="warehouses__sort-right">
            <div className="warehouses__sort-category sort-name">
              <p className="warehouses__sort-label">CONTACT NAME</p>
              <img
                src={sortIcon}
                alt=""
                className="warehouses__icon warehouses__icon--sort"
              />
            </div>
            <div className="warehouses__sort-category sort-info">
              <p className="warehouses__sort-label">CONTACT INFORMATION</p>
              <img
                src={sortIcon}
                alt=""
                className="warehouses__icon warehouses__icon--sort"
              />
            </div>
          </div>
          <p className="warehouses__sort-label sort-actions">ACTIONS</p>
        </div>
        {warehouseList}
      </section>
    </main>
  );
};

export default Warehouses;
