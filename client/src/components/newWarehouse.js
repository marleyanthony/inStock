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
                    <input type="text" placeholder="Warehouse Name" />
                    <p className="newWarehouse__label">Street Name</p>
                    <input type="text" placeholder="Street Name" />
                    <p className="newWarehouse__label">City</p>
                    <input type="text" placeholder="City" />
                    <p className="newWarehouse__label">Country</p>
                    <input type="text" placeholder="Country" />
                </div>

                <div className="newWarehouse__contacts">
                    <h1 className="newWarehouse__contacts-heading">Contact Details</h1>
                    <p className=""></p>
                    <input type="text" />
                </div>

                <div className="newWarehouse__CTAs">

                </div>
            </form>

        )
    }
}

export default newWarehouse; 