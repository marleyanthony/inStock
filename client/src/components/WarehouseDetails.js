import React from "react";

import backIcon from "../assets/Icons/arrow_back-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const WarehouseDetails = (props) => {
  const { warehouses } = props;
  return (
    <main className="warehouse">
      <section className="warehouse__header-container">
        <div className="warehouse__back-name">
          <img
            src={backIcon}
            alt=""
            className="warehouse__icon warehouse__icon--back"
          />
          <h1 className="warehouse__heading">warehouse name</h1>
        </div>
        <button className="warehouse__button">
          <img
            src={editIcon}
            alt=""
            className="warehouse__icon warehouse__icon--edit"
          />
        </button>
      </section>

      <section className="warehouse__details">
        <div className="warehouse__address">
          <p className="warehouse__label">WAREHOUSE ADDRESS:</p>
          <h3 className="warehouse__text">address details</h3>
        </div>

        <div className="warehouse__contact">
          <div className="warehouse__contact-name">
            <p className="warehouse__label">CONTACT NAME:</p>
            <h3 className="warehouse__text">contact details</h3>
          </div>

          <div className="warehouse__contact-info">
            <p className="warehouse__label">CONTACT INFORMATION:</p>
            <h3 className="warehouse__text">contact info</h3>
          </div>
        </div>
      </section>

      <section className="warehouse__inv-list">
        {/* this will be populated by another map() */}
        <div className="warehouse__inv-item">
          <p className="warehouse__label">INVENTORY ITEM</p>
          <a>
            <h3 className="warehouse__text">Item</h3>
            <img
              src={chevronIcon}
              alt=""
              className="warehouses__icon warehouses__icon--chevron"
            />
          </a>

          <p className="warehouse__label">CATEGORY</p>
          <h3 className="warehouse__text">Category</h3>

          <p className="warehouse__label">Status</p>
          <h3 className="warehouse__text">In Stock</h3>

          <p className="warehouse__label">QTY</p>
          <h3 className="warehouse__text">0</h3>
        </div>
      </section>
    </main>
  );
};

export default WarehouseDetails;
