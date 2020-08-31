import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import backIcon from "../assets/Icons/arrow_back-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

class ItemDetails extends React.Component {
  state = {
    currentItem: "",
  };

  componentDidMount() {
    console.log("props:", this.props);
    this.getSingleItem();
  }

  getSingleItem() {
    axios
      .get(
        `http://localhost:8080/warehouse/${this.props.match.params.name}/${this.props.match.params.itemName}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          currentItem: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const itemInfo = this.state.currentItem;
    return (
      <main className="inv-item">
        <section className="inv-item__header-container">
          <div className="inv-item__back-name">
            <Link to={`/warehouse/${this.props.match.params.name}`}>
              <img
                src={backIcon}
                alt=""
                className="inv-item__icon inv-item__icon--back"
              />
            </Link>
            <h1 className="inv-item__heading">{itemInfo.itemName}</h1>
          </div>
          <button className="inv-item__button">
            <img
              src={editIcon}
              alt=""
              className="inv-item__icon inv-item__icon--edit"
            />
            <h3 className="inv-item__button-text">Edit</h3>
          </button>
        </section>

        <section className="inv-item__details">
          <div className="inv-item__left-container">
            <p className="inv-item__label">ITEM DESCRIPTION:</p>
            <h3 className="inv-item__text">{itemInfo.description}</h3>

            <p className="inv-item__label">CATEGORY:</p>
            <h3 className="inv-item__text">{itemInfo.category}</h3>
          </div>

          <div className="inv-item__right-container">
            <div className="inv-item__status-qty-container">
              {itemInfo.status === "In Stock" ? (
                <>
                  <div className="inv-item__status-block">
                    <p className="inv-item__label">STATUS:</p>
                    <span className="inv-item__span--status">
                      <h3 className="inv-item__text inv-item__text--status-in">
                        {itemInfo.status}
                      </h3>
                    </span>
                  </div>

                  <div className="inv-item__qty-block">
                    <p className="inv-item__label">QUANTITY:</p>
                    <h3 className="inv-item__text">{itemInfo.quantity}</h3>
                  </div>
                </>
              ) : (
                <div className="inv-item__status-block">
                  <p className="inv-item__label">STATUS:</p>
                  <span className="inv-item__span--status">
                    <h3 className="inv-item__text inv-item__text--status-out">
                      {itemInfo.status}
                    </h3>
                  </span>
                </div>
              )}
            </div>

            <p className="inv-item__label">WAREHOUSE:</p>
            <h3 className="inv-item__text">{itemInfo.warehouseName}</h3>
          </div>
        </section>
      </main>
    );
  }
}

export default ItemDetails;
