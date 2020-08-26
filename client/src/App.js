import React from "react";
import "./styles/app.css";
import Warehouses from "./components/Warehouses";
import InventoryItems from "./components/InventoryItems";
import Header from "./components/Header";

import "./styles/app.css";

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
    inventories: [],
  };

  // getInvItems() {
  //   axios
  //     .get('http://localhost:5000/inv-items')
  // }

  render() {
    return (
      <div className="background">
        <Header />
        <Warehouses warehouses={this.state.warehouses} />
        <InventoryItems inventories={this.state.inventories} />
      </div>
    );
  }
}

export default App;
