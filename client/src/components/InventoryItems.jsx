import React from 'react'

function InventoryItems() {
  return (
    <section className="inv">
      <h1 className="inv__heading">Inventory</h1>
      <form className="inv__search-form">
        <input className="inv__search-input" type="text" name="search" placeholder="Search... &#128269;" />
        <button className="inv__search-btn">&#x2B; Add New Item</button>
      </form>

      <div className="inv__item-wrapper">
        {/* Mobile First Row */}
        <div className="inv__mobile-first-row-wrapper">
          <div className="inv__inv-item">
            <h5 className="inv__inv-item-header">Inventory Item</h5>
            <p className="inv__inv-item-info">Television</p>
          </div>
          <div className="inv__inv-status">
            <h5 className="inv__inv-status-header">Status</h5>
            <p className="inv__inv-status-info">In Stock</p>
          </div>
        </div>

        {/* Mobile Second Row */}
        <div className="inv__mobile-second-row-wrapper">
          <div className="inv__inv-category">
            <h5 className="inv__inv-category-header">Category</h5>
            <p className="inv__inv-category-info">Electronics</p>
          </div>
          <div className="inv__inv-qty">
            <h5 className="inv__inv-qty-header">QTY</h5>
            <p className="inv__inv-qty-info">500</p>
          </div>
        </div>

        {/* Mobile Third Row */}
        <div className="inv__mobile-third-row-wrapper">
          <div className="inv__inv-warehouse">
            <h5 className="inv__inv-warehouse-header">Warehouse</h5>
            <p className="inv__inv-warehouse-info">Manhattan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InventoryItems
