import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import close from "../assets/Icons/close-24px.svg";
import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

class InventoryItems extends React.Component {
  state = {
    searchTerm: null,
    searchResults: [],
  };

  componentWillUnmount() {
    this.setState({
      searchTerm: null,
      searchResults: null,
      modalIsOpen: false,
    });

    // console.log("component unmounted", this.state);
  }

  searchInventoryData = (e) => {
    const searchTerm = e.target.value;
    // regex that will check if item values contain the onChange input,
    // is also case insensitive and searches special characters! that was a hard one
    const regex = /\W/g;
    const searchTermRegex = RegExp(e.target.value.replace(regex, "\\$&"), "gi");
    const inventoryItems = this.props.inventories;
    let searchResults = inventoryItems.filter((item) => {
      return searchTermRegex.test(Object.values(item));
    });

    this.setState({
      searchTerm,
      searchResults,
    });
  };

  setModalIsOpen(modalIsOpen) {
    this.setState({
      modalIsOpen,
    });
  }

  deleteItem(e) {
    e.preventDefault();
    console.log("The delete was clicked");
  }

  render() {
    let inventoryItems = this.props.inventories;

    if (this.state.searchTerm !== null && this.state.searchResults.length > 0) {
      inventoryItems = this.state.searchResults;
    }

    const inventoryList = inventoryItems.map((inventory) => {
      return (
        <>
          <div className="inventory__sort-list-items">
            <div className="inventory__sort-list-items-left">
              <div className="inventory__sort-list-items-container">
                <p className="inventory__sort-list-items-label">
                  Inventory Item
                </p>
                <div className="inventory__sort-list-items-mobile-wrapper">
                  <Link
                    to={`/warehouse/${inventory.warehouseName
                      .split(" ")
                      .join("")}/${inventory.itemName.split(" ").join("")}`}
                    className="warehouse__link warehouse__link--item"
                  >
                    <h3 className="inventory__sort-list-items-blue-item-name">
                      {inventory.itemName}
                    </h3>
                    <img
                      src={chevronIcon}
                      alt=""
                      className="inventory__icon inventory__icon--chevron"
                    />
                  </Link>
                </div>
              </div>
              <div className="inventory__sort-list-items-container">
                <p className="inventory__sort-list-items-label">Category</p>
                <p className="inventory__sort-list-items-item-name">
                  {inventory.category}
                </p>
              </div>
            </div>

            <div className="inventory__item-right-container">
              <div className="inventory__sort-list-items-container">
                <p className="inventory__sort-list-items-label">Status</p>
                <p className="inventory__sort-list-items-item-name">
                  {inventory.status}
                </p>
              </div>
              <div className="inventory__sort-list-items-container">
                <p className="inventory__sort-list-items-label">QTY</p>
                <p className="inventory__sort-list-items-item-name">
                  {inventory.quantity}
                </p>
              </div>
              <div className="inventory__sort-list-items-container">
                <p className="inventory__sort-list-items-label">Warehouse</p>
                <p className="inventory__sort-list-items-item-name">
                  {inventory.warehouseName}
                </p>
              </div>
            </div>

            <div className="inventory__item-icons-container">
              <img
                src={deleteIcon}
                alt=""
                className="inventory__icon"
                onClick={() => this.setModalIsOpen(true)}
              />
              <Link to={"edit-item"} className="warehouses__link">
                <img src={editIcon} alt="" className="inventory__icon" />
              </Link>
            </div>
          </div>
        </>
      );
    });

    return (
      <main className="inventory">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setModalIsOpen(false)}
          className="inventory__modal"
          style={{ overlay: { backgroundColor: "rgba(19, 24, 44, 0.7)" } }}
        >
          <section className="delete-modal">
            <div className="delete-modal__tablet-wrapper">
              <img
                src={close}
                alt="close"
                className="delete-modal__close-btn"
                onClick={() => this.setModalIsOpen(false)}
              />
              <h1 className="delete-modal__header">
                Delete Television inventory item?
              </h1>
              <p className="delete-modal__warning">
                Please confirm that you'd like to delete Television from the
                inventory list. You won't be able to undo this action.
              </p>
              <div className="delete-modal__delete-action-btn-container">
                <button
                  className="delete-modal__cancel-btn"
                  onClick={() => this.setModalIsOpen(false)}
                >
                  Cancel
                </button>
                <button className="delete-modal__delete-btn">Delete</button>
              </div>
            </div>
          </section>
        </Modal>

        <section className="inventory__header-wrapper">
          <h1 className="inventory__heading">Inventory</h1>
          <div className="inventory__search-add">
            <label htmlFor="search" className="inventory__search-label">
              <input
                type="search"
                className="inventory__searchbar"
                name="search"
                placeholder="Search..."
                onChange={(e) => this.searchInventoryData(e)}
              />
              <img src={searchIcon} alt="" className="inventory__search-icon" />
            </label>
            <Link to={"add-item"} className="warehouses__link">
              <button className="inventory__button">+ Add New Item</button>
            </Link>
          </div>
        </section>

        <section className="inventory__list">
          <div className="inventory__sort">
            <div className="inventory__sort-left">
              <div className="inventory__sort-category sort-inventory">
                <p className="inventory__sort-label">Inventory Item</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="inventory__icon inventory__icon--sort"
                />
              </div>
              <div className="inventory__sort-category sort-category">
                <p className="inventory__sort-label">Category</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="inventory__icon inventory__icon--sort"
                />
              </div>
            </div>
            <div className="inventory__sort-right">
              <div className="inventory__sort-category sort-status">
                <p className="inventory__sort-label">Status</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="inventory__icon inventory__icon--sort"
                />
              </div>
              <div className="inventory__sort-category sort-qty">
                <p className="inventory__sort-label">QTY</p>
                <img
                  src={sortIcon}
                  alt=""
                  className="inventory__icon inventory__icon--sort"
                />
              </div>
              <div className="inventory__sort-category sort-inventory">
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
          {/* if search is made & no results found, render an error, else render the full list */}
          {this.state.searchTerm && this.state.searchResults.length < 1 ? (
            <div className="warehouses__search-no-results">
              <h3 className="warehouses__text-address">No results found</h3>
            </div>
          ) : (
            inventoryList
          )}
        </section>
      </main>
    );
  }
}

export default InventoryItems;
