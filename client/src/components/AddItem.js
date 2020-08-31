import React from 'react'
import { Link } from "react-router-dom";
import backIcon from "../assets/Icons/arrow_back-24px.svg";
import axios from "axios";

function AddItem({ handleSubmit }) {

  handleSubmit = (event) => {
    event.preventDefault();
    let newInventory = {
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      categories: event.target.categories.value,
      quantity: event.target.quantity.value,
      warehouse: event.target.warehouse.value,
    }
    axios.post("http://localhost:8080/inventory", newInventory)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    event.target.reset();
  }
  return (
    <main className="inventory">
      <section className="inventory__header-container">
        <div className="inventory__back-name">
          <Link to="/inventory">
            <img src={backIcon} alt="" className="inventory__icon inventory__icon--back" />
          </Link>
          <h1 className="inventory__heading">Add New Inventory Item</h1>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <div className="inventory__details-form-wrapper">
          <section className="inventory__details-container">
            <h3 className="inventory__details-header">Item Details</h3>
            <div action="" className="inventory__item-name-wrapper">
              <h5 htmlFor="name" className="inventory__item-name-input-label">Item Name</h5>
              <input type="text" name="itemName" className="inventory__item-name-input" placeholder="Item Name" />
            </div>
            <div action="" className="inventory__item-description-container">
              <h5 htmlFor="name" className="inventory__item-description-input-label">Description</h5>
              <textarea name="description" className="inventory__item-description-input" placeholder="Please enter a brief item description..." />
            </div>
            <div className="inventory__category-container">
              <h5 htmlFor="category" className="inventory__item-category-input-label">Category</h5>
              <select name="categories" className="inventory__category-select">
                <option>Please Select</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
          </section>

          <section className="inventory__availability-container">
            <h3 className="inventory__availability-header">Item Availability</h3>
            <div className="inventory__status-container">
              <h5 htmlFor="status">Status</h5>
              <div className="inventory__radio-btn-container">
                <div className="inventory__status-instock-radio">
                  <input type="radio" name="in-stock" className="inventory__status-radio-in" />
                  <label for="in-stock" className="inventory__status-label">In Stock</label>
                </div>
                <div className="inventory__status-outstock-radio">
                  <input type="radio" name="out-of-stock" className="inventory__status-radio-out" />
                  <label for="in-stock" className="inventory__status-label">Out of stock</label>
                </div>
              </div>
            </div>
            <div className="inventory__quan">
              <h5 htmlFor="name" className="inventory__item-name-input-label">Quantity</h5>
              <input type="text" name="quantity" className="inventory__item-name-input" placeholder="0" />
            </div>
            <div className="inventory__warehouse-container">
              <h5 htmlFor="warehouse" className="inventory__warehouse-header">Warehouse</h5>
              <select name="warehouse" className="inventory__warehouse-select-list">
                <option value="electronics">Manhattan</option>
              </select>
            </div>
          </section>
        </div>
        <div className="inventory__action-btn-container">
          <Link to="/inventory">
            <button className="inventory__cancel-btn">Cancel</button>
          </Link>
          <button className="inventory__save-btn">+ Add Item</button>
        </div>
      </form>
    </main>
  );
}

export default AddItem
