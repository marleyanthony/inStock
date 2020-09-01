import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import close from "../assets/Icons/close-24px.svg";

import searchIcon from "../assets/Icons/search-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const InventoryItems = ({ inventories }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  console.log("inventories:", inventories);
  function deleteItem(e) {
    e.preventDefault();
    console.log('The delete was clicked');
  }

  const inventoryList = inventories.map((inventory) => {
    return (
      <>
        <div className="inventory__sort-list-items">
          <div className="inventory__sort-list-items-left">
            <div className="inventory__sort-list-items-container">
              <p className="inventory__sort-list-items-label">Inventory Item</p>
              <div className="inventory__sort-list-items-mobile-wrapper">
                <h3 className="inventory__sort-list-items-blue-item-name">{inventory.itemName}</h3>
                <img src={chevronIcon} alt="" className="inventory__icon inventory__icon--chevron" />
              </div>
            </div>
            <div className="inventory__sort-list-items-container-category">
              <p className="inventory__sort-list-items-label">Category</p>
              <p className="inventory__sort-list-items-item-name">{inventory.category}</p>
            </div>
          </div>

          <div className="inventory__sort-list-right-container">
            <div className="inventory__sort-list-items-container">
              <p className="inventory__sort-list-items-label">Status</p>
              <p className="inventory__sort-list-items-item-name-status">{inventory.status}</p>
            </div>
            <div className="inventory__sort-list-items-container">
              <p className="inventory__sort-list-items-label">QTY</p>
              <p className="inventory__sort-list-items-item-name-quantity">{inventory.quantity}</p>
            </div>
            <div className="inventory__sort-list-items-container">
              <p className="inventory__sort-list-items-label">Warehouse</p>
              <p className="inventory__sort-list-items-item-name-warehouse">{inventory.warehouseName}</p>
            </div>
          </div>

          <div className="inventory__sort-list-item-icons-container">
            <img src={deleteIcon} alt="" className="inventory__icon" onClick={() => setModalIsOpen(true)} />
            <Link to={'edit-item'} className="warehouses__link">
              <img src={editIcon} alt="" className="inventory__icon" />
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <main className="inventory">


        <section className="inventory__header-wrapper">
          <h1 className="inventory__heading">Inventory</h1>
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
                <p className="inventory__sort-label">Inventory Item</p>
                <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
              </div>
              <div className="inventory__sort-category sort-category">
                <p className="inventory__sort-label">Category</p>
                <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
              </div>
            </div>
            <div className="inventory__sort-right">
              <div className="inventory__sort-category sort-status">
                <p className="inventory__sort-label">Status</p>
                <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
              </div>
              <div className="inventory__sort-category sort-qty">
                <p className="inventory__sort-label">QTY</p>
                <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
              </div>
              <div className="inventory__sort-category sort-inventory">
                <p className="inventory__sort-label">Warehouse</p>
                <img src={sortIcon} alt="" className="inventory__icon inventory__icon--sort" />
              </div>
            </div>
            <p className="inventory__sort-label sort-actions">ACTIONS</p>
          </div>
          {inventoryList}
        </section>


      </main>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="inventory__modal" style={{ overlay: { backgroundColor: 'rgba(19, 24, 44, 0.7)' } }}>
        <section className="delete-modal">
          <div className="delete-modal__tablet-wrapper">
            <img src={close} alt="close" className="delete-modal__close-btn" onClick={() => setModalIsOpen(false)} />
            <h1 className="delete-modal__header">Delete Television inventory item?</h1>
            <p className="delete-modal__warning">Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action.</p>
            <div className="delete-modal__delete-action-btn-container">
              <button className="delete-modal__cancel-btn" onClick={() => setModalIsOpen(false)}>Cancel</button>
              <button className="delete-modal__delete-btn">Delete</button>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default InventoryItems;
