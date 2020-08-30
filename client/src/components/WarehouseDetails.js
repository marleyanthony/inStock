import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import backIcon from "../assets/Icons/arrow_back-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

class WarehouseDetails extends React.Component {
  state = {
    currentWarehouse: {},
  };

  componentDidMount() {
    this.getSingleWarehouse(this.props.match.params.name);
  }

  // componentDidUpdate(prevProps) {
  //   console.log("this.props:", this.props.match.params.name);
  //   console.log("prevProps:", prevProps.match.params.name);
  //   if (
  //     // !!prevProps &&
  //     this.props.match.params.name !== prevProps.match.params.name
  //   ) {
  //     this.getSingleWarehouse(this.props.match.params.name);
  //     console.log("got single warehouse and set state");
  //   }
  // }

  getSingleWarehouse = (name) => {
    axios
      .get(`http://localhost:8080/warehouse/${name}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          currentWarehouse: response.data[0],
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const warehouse = this.state.currentWarehouse;
    console.log("warehouse:", warehouse);
    return (
      <main className="warehouse">
        {!warehouse && (
          <section className="warehouse__header-container">
            <div className="warehouse__back-name">
              <Link to="/warehouse">
                <img
                  src={backIcon}
                  alt=""
                  className="warehouse__icon warehouse__icon--back"
                />
              </Link>
              <h1 className="warehouse__heading">Loading...</h1>
            </div>
          </section>
        )}
        {!!warehouse && (
          <>
            <section className="warehouse__header-container">
              <div className="warehouse__back-name">
                <Link to="/warehouse">
                  <img
                    src={backIcon}
                    alt=""
                    className="warehouse__icon warehouse__icon--back"
                  />
                </Link>
                <h1 className="warehouse__heading">{warehouse.name}</h1>
              </div>
              <button className="warehouse__button">
                <img
                  src={editIcon}
                  alt=""
                  className="warehouse__icon warehouse__icon--edit"
                />
                <h3 className="warehouse__button-text">Edit</h3>
              </button>
            </section>

            <section className="warehouse__details">
              <div className="warehouse__address">
                <p className="warehouse__label warehouse__label--perm">
                  WAREHOUSE ADDRESS:
                </p>
                <h3 className="warehouse__text">{warehouse.address},</h3>
                <h3 className="warehouse__text">
                  {warehouse.city}, {warehouse.country}
                </h3>
              </div>

              <div className="warehouse__contact">
                <div className="warehouse__contact-name">
                  <p className="warehouse__label warehouse__label--perm">
                    CONTACT NAME:
                  </p>
                  <h3 className="warehouse__text">{warehouse.contact?.name}</h3>
                  <h3 className="warehouse__text">
                    {warehouse.contact?.position}
                  </h3>
                </div>

                <div className="warehouse__contact-info">
                  <p className="warehouse__label warehouse__label--perm">
                    CONTACT INFORMATION:
                  </p>
                  <h3 className="warehouse__text">
                    {warehouse.contact?.phone}
                  </h3>
                  <h3 className="warehouse__text">
                    {warehouse.contact?.email}
                  </h3>
                </div>
              </div>
            </section>

            <section className="warehouse__inv-list">
              <div className="warehouse__sort">
                <div className="warehouse__sort-left">
                  <div className="warehouse__sort-category-bar sort-inv-item">
                    <p className="warehouse__sort-label">INVENTORY ITEM</p>
                    <img
                      src={sortIcon}
                      alt=""
                      className="warehouse__icon warehouse__icon--sort"
                    />
                  </div>
                  <div className="warehouse__sort-category-bar sort-category">
                    <p className="warehouse__sort-label">CATEGORY</p>
                    <img
                      src={sortIcon}
                      alt=""
                      className="warehouse__icon warehouse__icon--sort"
                    />
                  </div>
                </div>
                <div className="warehouse__sort-right">
                  <div className="warehouse__sort-category-bar sort-status">
                    <p className="warehouse__sort-label">STATUS</p>
                    <img
                      src={sortIcon}
                      alt=""
                      className="warehouse__icon warehouse__icon--sort"
                    />
                  </div>
                  <div className="warehouse__sort-category-bar sort-qty">
                    <p className="warehouse__sort-label">QUANTITY</p>
                    <img
                      src={sortIcon}
                      alt=""
                      className="warehouse__icon warehouse__icon--sort"
                    />
                  </div>
                </div>
                <p className="warehouse__sort-label sort-actions">ACTIONS</p>
              </div>
              {/* this will be populated by another map() */}
              <div className="warehouse__inv-item">
                <div className="warehouse__left-container">
                  <p className="warehouse__label">INVENTORY ITEM</p>
                  <a className="warehouse__link warehouse__link--item">
                    <h3 className="warehouse__text warehouse__text--link warehouse__text--item">
                      Item
                    </h3>
                    <img
                      src={chevronIcon}
                      alt=""
                      className="warehouses__icon warehouses__icon--chevron"
                    />
                  </a>

                  <p className="warehouse__label">CATEGORY</p>
                  <h3 className="warehouse__text warehouse__text--category">
                    Category
                  </h3>
                </div>

                <div className="warehouse__right-container">
                  <p className="warehouse__label">STATUS</p>
                  <span className="warehouse__span--status">
                    <h3 className="warehouse__text warehouse__text--status">
                      In Stock
                    </h3>
                  </span>

                  <p className="warehouse__label">QTY</p>
                  <h3 className="warehouse__text warehouse__text--qty">0</h3>
                </div>

                <div className="warehouse__icons-container">
                  <img
                    src={deleteIcon}
                    alt=""
                    className="warehouse__icon warehouse__icon--delete"
                  />
                  <img src={editIcon} alt="" className="warehouse__icon" />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    );
  }
}

export default WarehouseDetails;
