import React, { Component } from "react";
// import React from "react";
// import { Link } from "react-router-dom";
import arrowBack from "../assets/Icons/arrow_back-24px.svg";


class editWarehouse extends Component {


    render() {
        return (
            <form className="editWarehouse" onSubmit={this.handleSubmit}>
                <div className="editWarehouse__arr-heading-container">
                    <img src={arrowBack} alt="Back Arrow" />
                    <h1 className="editWarehouse__wh-heading">Edit Warehouse</h1>
                </div>
                <div className="editWarehouse__details-contacts-container">
                    <div className="editWarehouse__wh-details-container">
                        <h3 className="editWarehouse__details-heading">Warehouse Details</h3>
                        <p className="editWarehouse__wh-label">Warehouse Name</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="King West"
                            name="name"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">Street Name</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="469 King Street West"
                            name="address"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">City</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="Toronto"
                            name="city"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">Country</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="CAN"
                            name="country"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                    </div>

                    <div className="editWarehouse__wh-contacts-container">
                        <h3 className="editWarehouse__contacts-heading">Contact Details</h3>
                        <p className="editWarehouse__wh-label">Contact Name</p>
                        <input className="editWarehouse__input-field newWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Graeme Lyon"
                            name="contactName"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">Position</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Warehouse Manager"
                            name="position"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">Phone Number</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="+1 (647) 504-0911"
                            name="phone"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                        <p className="editWarehouse__wh-label">Email</p>
                        <input className="editWarehouse__input-field editWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="glyon@insotck.com"
                            name="email"
                        // onChange={this.handleChange}
                        />
                        <div className="editWarehouse__errorRequired-container">
                        </div>
                    </div>
                </div>

                <div className="editWarehouse__action-btn-container">
                    <button className="editWarehouse__cancel-btn" onClick={this.cancelBackToPage}>Cancel</button>
                    <button className="editWarehouse__add-wh-btn editWarehouse__add-wh-btn--colorAccent"
                        type="submit" value="submit"
                    >Save</button>

                </div>

            </form>

        )
    }

}

export default editWarehouse; 