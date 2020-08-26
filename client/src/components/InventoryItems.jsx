import React from 'react'

function InventoryItems({ inventories }) {
  const inventoryList = inventories.map((inventory) => {
    return (
      <div className="inv">
        <div className="inv__item-wrapper">
          {/* Mobile First Row */}
          <div className="inv__mobile-first-row-wrapper">
            <div className="inv__inv-item">
              <h5 className="inv__inv-item-header">Inventory Item</h5>
              <p className="inv__inv-item-info">{inventory.name}</p>
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
        </div>
      </div>
    )
  });

  return (
    <main className="inv">
      <h1 className="inv__heading">Inventory</h1>
      <form className="inv__search-form">
        <input className="inv__search-input" type="text" name="search" placeholder="Search... &#128269;" />
        <button className="inv__search-btn">&#x2B; Add New Item</button>
      </form>
      <section className="warehouses__list">{inventoryList}</section>
    </main>
  );
}

export default InventoryItems
