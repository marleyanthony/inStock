import React, { Component } from "react";
// import { Link } from "react-router-dom";

class newWarehouse extends Component {
    render() {
        return (
            <form className="newWarehouse">
                <h1 className="newWarehouse__heading">Add New Warehouse</h1>
                <div className="newWarehouse__detials">
                    <h1 className="newWarehouse__details-heading">Warehouse Details</h1>
                    <p className="newWarehouse__label">Warehouse Name</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Warehouse Name" />
                    <p className="newWarehouse__label">Street Name</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Street Name" />
                    <p className="newWarehouse__label">City</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="City" />
                    <p className="newWarehouse__label">Country</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Country" />
                </div>

                <div className="newWarehouse__contacts">
                    <h1 className="newWarehouse__contacts-heading">Contact Details</h1>
                    <p className="newWarehouse__label">Contact Name</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Contact Number" />
                    <p className="newWarehouse__label">Position</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Position" />
                    <p className="newWarehouse__label">Phone Number</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Phone Number" />
                    <p className="newWarehouse__label">Email</p>
                    <input className="newWarehouse__input-field" type="text" placeholder="Email" />
                </div>

                <div className="newWarehouse__CTAs">

                </div>
            </form>

        )
    }
}

export default newWarehouse; 