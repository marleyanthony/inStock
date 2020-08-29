import React from "react";

import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const InventoryItems = ({ inventories }) => {
  console.log("inventories:", inventories);
  const inventoryList = inventories.map((inventory) => {
    return (
      <div className="inventory__item">
        <div className="inventory__item-left-container">
          <p className="inventory__label">Inventory Item</p>
          {/* <Link to={`/warehouse/${navLink}`} className="inventory__link"> */}
          <h3 className="inventory__text-location">
            {inventory.item}
          </h3>
          <img
            src={chevronIcon}
            alt=""
            className="inventory__icon inventory__icon--chevron"
          />
          {/* </Link> */}
          <p className="inventory__label">Category</p>
          <p className="inventory__text-address">
            {inventory.category}
          </p>
        </div>

        <div className="inventory__item-right-container">
          <p className="inventory__label">Status</p>
          <p className="inventory__text-contact-name">
            {inventory.status}
          </p>
          <div className="inventory__contact-info-container">
            <p className="inventory__label">QTY</p>
            <p className="inventory__text-contact-phone">
              {inventory.quantity}
            </p>
          </div>
        </div>

        <div className="inventory__item-icons-container">
          <img src={deleteIcon} alt="" className="inventory__icon" />
          <img src={editIcon} alt="" className="inventory__icon" />
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

      <section className="inventory__list">
        <div className="inventory__sort">
          <div className="inventory__sort-left">
            <div className="inventory__sort-category sort-warehouse">
              <p className="inventory__sort-label">Inventory Item</p>
              <img
                src={sortIcon}
                alt=""
                className="inventory__icon inventory__icon--sort"
              />
            </div>
            <div className="inventory__sort-category sort-address">
              <p className="inventory__sort-label">Category</p>
              <img
                src={sortIcon}
                alt=""
                className="inventory__icon inventory__icon--sort"
              />
            </div>
          </div>
          <div className="inventory__sort-right">
            <div className="inventory__sort-category sort-name">
              <p className="inventory__sort-label">Status</p>
              <img
                src={sortIcon}
                alt=""
                className="inventory__icon inventory__icon--sort"
              />
            </div>
            <div className="inventory__sort-category sort-info">
              <p className="inventory__sort-label">QTY</p>
              <img
                src={sortIcon}
                alt=""
                className="inventory__icon inventory__icon--sort"
              />
            </div>
            <div className="inventory__sort-category sort-info">
              <p className="inventory__sort-label">Warehouse</p>
              <img
                src={sortIcon}
                alt=""
                className="inventory__icon inventory__icon--sort"
              />
            </div>
          </div>
          <p className="inventory__sort-label sort-actions">ACTIONS</p>
        </div>
        {inventoryList}
      </section>
    </main>
  );
};

export default InventoryItems;
