import React, { Component } from "react";
import arrowBack from "../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../assets/Icons/error-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";

class newWarehouse extends Component {
    state = {
        name: "",
        address: "",
        city: "",
        country: "",
        contact: {
            name: "",
            position: "",
            phone: "",
            email: ""
        },

    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        const { name, address, city, country, contactName, position, phone, email } = event.target;


        axios
            .post("http://localhost:8080/warehouse", {

                name: name.value,
                address: address.value,
                city: city.value,
                country: country.value,
                contact: {
                    name: contactName.value,
                    position: position.value,
                    phone: phone.value,
                    email: email.value
                },
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    addWarehouse: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });

        event.target.reset();
    };


    render() {
        return (
            <form className="newWarehouse" onSubmit={this.handleSubmit}>

                <div className="newWarehouse__arr-heading-container">
                    <Link to="/warehouse" className="newWarehouse__link-back-arrow">
                        <img src={arrowBack} alt="Back Arrow" />
                    </Link>
                    <h1 className="newWarehouse__wh-heading">Add New Warehouse</h1>
                </div>
                <div className="newWarehouse__details-contacts-container">
                    <div className="newWarehouse__wh-details-container">
                        <h3 className="newWarehouse__details-heading">Warehouse Details</h3>
                        <p className="newWarehouse__wh-label">Warehouse Name</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="Warehouse Name"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">Street Name</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="Street Name"
                            name="address"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">City</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="City"
                            name="city"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">Country</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-det"
                            type="text" placeholder="Country"
                            name="country"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                    </div>

                    <div className="newWarehouse__wh-contacts-container">
                        <h3 className="newWarehouse__contacts-heading">Contact Details</h3>
                        <p className="newWarehouse__wh-label">Contact Name</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Contact Number"
                            name="contactName"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">Position</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Position"
                            name="position"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">Phone Number</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Phone Number"
                            name="phone"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                        <p className="newWarehouse__wh-label">Email</p>
                        <input className="newWarehouse__input-field newWarehouse__input-field--tabDesk-cont"
                            type="text" placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <div className="newWarehouse__errorRequired-container">
                            <img src={errorIcon} alt="error icon" /> <p>This field is required</p>
                        </div>
                    </div>
                </div>

                <div className="newWarehouse__action-btn-container">
                    <button className="newWarehouse__cancel-btn" onClick={this.cancelBackToPage}>Cancel</button>
                    <button className="newWarehouse__add-wh-btn newWarehouse__add-wh-btn--colorAccent"
                        type="submit" value="submit"
                    >+ Add Warehouse</button>

                </div>
            </form>

        )
    }
}

export default newWarehouse; 