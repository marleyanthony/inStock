import React from "react";
import { Link } from "react-router-dom";

import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const InventoryItems = ({ inventories }) => {
  // console.log("inventories:", inventories);
  const inventoryList = inventories.map((inventory) => {
    return (
      <div className="inventory__item">
        <div className="inventory__item-left-container">
          <p className="inventory__label">
            Inventory Item
          </p>
          <div className="inventory__item-name-container">
            <h3 className="inventory__item-name">
              {inventory.item}
            </h3>
            <img src={chevronIcon} alt="" className="inventory__icon inventory__icon--chevron" />
          </div>
          <p className="inventory__label">
            Category
            </p>
          <p className="inventory__category">
            {inventory.category}
          </p>
        </div>

        <div className="inventory__item-right-container">
          <div className="inventory__status-container">
            <p className="inventory__label">
              Status
            </p>
            <p className="inventory__status">
              {inventory.status}
            </p>
          </div>
          <div className="inventory__quantity-container">
            <p className="inventory__label">
              QTY
            </p>
            <p className="inventory__quantity">
              {inventory.quantity}
            </p>
          </div>
          <div className="inventory__warehouse-container">
            <p className="inventory__label">
              Warehouse
            </p>
            <p className="inventory__warehouse">
              {inventory.warehouse}
            </p>
          </div>
        </div>

        <div className="inventory__item-icons-container">
          <Link to={'delete-item'} className="warehouses__link">
            <img src={deleteIcon} alt="" className="inventory__icon" />
          </Link>
          <Link to={'edit-item'} className="warehouses__link">
            <img src={editIcon} alt="" className="inventory__icon" />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <main className="inventory">
      <section className="inventory__header-wrapper">
        <h1 className="inventory__heading">
          Inventory
        </h1>
        <div className="inventory__search-add">
          <label htmlFor="search" className="inventory__search-label">
            <input type="search" className="inventory__searchbar" name="search" placeholder="Search..." />
            <img src={searchIcon} alt="" className="inventory__search-icon" />
          </label>
          <Link to={'add-item'} className="warehouses__link">
            <button className="inventory__button">+ Add New Item</button>
          </Link>
        </div>
      </section>

      <section className="inventory__list">
        <div className="inventory__sort">
          <div className="inventory__sort-left">
            <div className="inventory__sort-category sort-inventory">
              <p className="inventory__sort-label">
                Inventory Item
              </p>
              <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
            </div>
            <div className="inventory__sort-category sort-category">
              <p className="inventory__sort-label">
                Category
              </p>
              <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
            </div>
          </div>
          <div className="inventory__sort-right">
            <div className="inventory__sort-category sort-status">
              <p className="inventory__sort-label">
                Status
              </p>
              <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
            </div>
            <div className="inventory__sort-category sort-qty">
              <p className="inventory__sort-label">
                QTY
              </p>
              <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
            </div>
            <div className="inventory__sort-category sort-inventory">
              <p className="inventory__sort-label">
                Warehouse
              </p>
              <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
            </div>
          </div>
          <p className="inventory__sort-label sort-actions">
            ACTIONS
          </p>
        </div>
        {inventoryList}
      </section>
    </main>
  );
};

export default InventoryItems;
