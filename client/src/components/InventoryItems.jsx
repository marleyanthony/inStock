import React from "react";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const InventoryItems = ({ inventories }) => {
  console.log("inventories:", inventories);
  const inventoryList = inventories.map((inventory) => {
    return (
      <div className="inv-item">
        <div className="inv__item-wrapper">
          {/* Mobile First Row */}
          <div className="inv__mobile-first-row-wrapper">
            <div className="inv__inv-item">
              <h5 className="inv__inv-item-header">Inventory Item</h5>
              <p className="inv__inv-item-info">{inventory.item}</p>
            </div>
            <div className="inv__inv-status">
              <h5 className="inv__inv-status-header">Status</h5>
              <p className="inv__inv-status-info">{inventory.status}</p>
            </div>
          </div>

          {/* Mobile Second Row */}
          <div className="inv__mobile-second-row-wrapper">
            <div className="inv__inv-category">
              <h5 className="inv__inv-category-header">Category</h5>
              <p className="inv__inv-category-info">{inventory.category}</p>
            </div>
            <div className="inv__inv-qty">
              <h5 className="inv__inv-qty-header">QTY</h5>
              <p className="inv__inv-qty-info">{inventory.quantity}</p>
            </div>
          </div>

          {/* Mobile Third Row */}
          <div className="inv__mobile-third-row-wrapper">
            <div className="inv__inv-warehouse">
              <h5 className="inv__inv-warehouse-header">Warehouse</h5>
              <p className="inv__inv-warehouse-info">{inventory.warehouse}</p>
            </div>
          </div>

          <div className="inv__item-icons-container">
            <img src={deleteIcon} alt="" className="inv__icon" />
            <img src={editIcon} alt="" className="inv__icon" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="inv">
      <div className="inv__heading-container">
        <h1 className="inv__heading">Inventory</h1>
      </div>
      <form className="inv__search-form">
        <input
          className="inv__search-bar"
          type="text"
          name="search"
          placeholder="Search... &#128269;"
        />
        <button className="inv__search-btn">&#x2B; Add New Item</button>
      </form>
      <section className="warehouses__list">{inventoryList}</section>
    </main>
  );
};

export default InventoryItems;
