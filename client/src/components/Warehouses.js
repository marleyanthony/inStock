import React from "react";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

const Warehouses = () => {
  return (
    <main className="warehouses">
      <section className="warehouses__header">
        <h1 className="warehouses__heading">Warehouses</h1>
        <input type="search" className="warehouses__searchbar" name="search" />
        <button className="warehouses__button">
          <h3 className="warehouses__button-text">+ Add New Warehouse</h3>
        </button>
      </section>

      <section className="warehouses__list-items">
        <div className="warehouses__item-left-container">
          <a>
            <h3 className="warehouses__text-location">Manhattan</h3>
            <img src={chevronIcon} alt="" className="warehouses__icon" />
          </a>
          <p className="warehouses__text-address">
            503 Broadway, New York, USA
          </p>
        </div>

        <div className="warehouses__item-right-container">
          <p className="warehouses__text-contact-name">Parmin Aujla</p>
          <p className="warehouses__text-contact-phone">+1 (629) 555-0129</p>
          <p className="warehouses__text-contact-email">paujla@instock.com</p>
        </div>

        <div className="warehouses__itms-icons-container">
          <img src={deleteIcon} alt="" className="warehouses__icon" />
          <img src={editIcon} alt="" className="warehouses__icon" />
        </div>
      </section>
    </main>
  );
};

export default Warehouses;
