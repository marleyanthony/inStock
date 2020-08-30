import React from 'react'
import { Link } from "react-router-dom";
import backIcon from "../assets/Icons/arrow_back-24px.svg";

function EditItem() {
  return (
    <main className="inventory">
      <section className="inventory__header-container">
        <div className="inventory__back-name">
          <Link to="/inventory">
            <img
              src={backIcon}
              alt=""
              className="inventory__icon inventory__icon--back"
            />
          </Link>
          <h1 className="inventory__heading">Edit Inventory Item</h1>
        </div>
      </section>

      <section className="inventory__details-container">
        <h3 className="inventory__details-header">
          Item Details
        </h3>
        <div action="" className="inventory__item-name-container">
          <h5 htmlFor="name" className="inventory__item-name-input-label">
            Item Name
          </h5>
          <input type="text" name="item-name" className="inventory__item-name-input" />
        </div>
        <div action="" className="inventory__item-name-container">
          <label htmlFor="name">
            Description
          </label>
          <textarea name="description" cols="30" rows="10"></textarea>
        </div>
        <div action="" className="inventory__category-container">
          <label htmlFor="category">
            Category
          </label>
          <select name="categories">
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </section>

      <section className="inventory__availability-container">
        <h3 className="inventory__availability-header">
          Item Availability
        </h3>
        <div className="inventory__status-container">
          <label htmlFor="status">
            Status
          </label>
          <label for="in-stock">In Stock</label>
          <input type="radio" name="in-stock" />
          <label for="out-of-stock">Out of Stock</label>
          <input type="radio" name="out-of-stock" />
        </div>
        <div className="inventory__warehouse-container">
          <label htmlFor="warehouse">
            Warehouse
          </label>
          <select name="warehouse">
            <option value="electronics">Manhattan</option>
          </select>
        </div>
        <div className="inventory__action-btn-container">
          <button className="inventory__cancel-btn">Cancel</button>
          <button className="inventory__save-btn">Save</button>
        </div>
      </section>
    </main>
  );
}

export default EditItem
