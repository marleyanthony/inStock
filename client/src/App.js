import React from "react";
import './styles/app.css';
import Warehouses from "./components/Warehouses";
import InventoryItems from "./components/InventoryItems";
import Header from './components/Header';

class App extends React.Component {
  state = {
    warehouses: [
      {
        id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        name: "Manhattan",
        address: "503 Broadway",
        city: "New York",
        country: "USA",
        contact: {
          name: "Parmin Aujla",
          position: "Warehouse Manager",
          phone: "+1 (646) 123-1234",
          email: "paujla@instock.com",
        },
      },
      {
        id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        name: "King West",
        address: "469 King Street West",
        city: "Toronto",
        country: "CAN",
        contact: {
          name: "Greame Lyon",
          position: "Warehouse Manager",
          phone: "+1 (646) 123-1234",
          email: "glyon@instock.com",
        },
      },
    ],
    inventories: [
      {
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Television",
        description:
          'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
        category: "Electronics",
        status: "In Stock",
        quantity: 500,
      },
      {
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Gym Bag",
        description:
          "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        category: "Gear",
        status: "Out of Stock",
        quantity: 0,
      },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <Warehouses warehouseList={this.state.warehouses} />
        <InventoryItems inventories={this.state.inventories} />
      </div>
    );
  }
}

export default App;
