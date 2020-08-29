import React, { Component } from "react";
// import { Link } from "react-router-dom";
import arrowBack from "../assets/Icons/arrow_back-24px.svg";

class newWarehouse extends Component {
    render() {
        return (
            <form className="newWarehouse">

                <div className="newWarehouse__arr-heading-container">
                    <img src={arrowBack} alt="Back Arrow" />
                    <h1 className="newWarehouse__wh-heading">Add New Warehouse</h1>
                </div>
                <div className="newWarehouse__tabletDesk">
                    <div className="newWarehouse__wh-details-container">
                        <h3 className="newWarehouse__details-heading">Warehouse Details</h3>
                        <p className="newWarehouse__wh-label">Warehouse Name</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Warehouse Name" />
                        <p className="newWarehouse__wh-label">Street Name</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Street Name" />
                        <p className="newWarehouse__wh-label">City</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="City" />
                        <p className="newWarehouse__wh-label">Country</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Country" />
                    </div>

                    <div className="newWarehouse__wh-contacts-container">
                        <h3 className="newWarehouse__contacts-heading">Contact Details</h3>
                        <p className="newWarehouse__wh-label">Contact Name</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Contact Number" />
                        <p className="newWarehouse__wh-label">Position</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Position" />
                        <p className="newWarehouse__wh-label">Phone Number</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Phone Number" />
                        <p className="newWarehouse__wh-label">Email</p>
                        <input className="newWarehouse__input-field" type="text" placeholder="Email" />
                    </div>
                </div>

                <div className="newWarehouse__action-btn-container">
                    <button className="newWarehouse__cancel-btn" >Cancel</button>
                    <button className="newWarehouse__add-wh-btn newWarehouse__add-wh-btn--colorAccent" >+ Add Warehouse</button>

                </div>
            </form>

        )
    }
}

export default newWarehouse; 